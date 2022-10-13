package operations

import (
	"openapi/pkg/models/shared"
)

type ListUserPoolClientsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListUserPoolClientsXAmzTargetEnum string

const (
	ListUserPoolClientsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserPoolClients ListUserPoolClientsXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListUserPoolClients"
)

type ListUserPoolClientsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserPoolClientsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListUserPoolClientsRequest struct {
	QueryParams ListUserPoolClientsQueryParams
	Headers     ListUserPoolClientsHeaders
	Request     shared.ListUserPoolClientsRequest `request:"mediaType=application/json"`
}

type ListUserPoolClientsResponse struct {
	ContentType                 string
	InternalErrorException      *interface{}
	InvalidParameterException   *interface{}
	ListUserPoolClientsResponse *shared.ListUserPoolClientsResponse
	NotAuthorizedException      *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
