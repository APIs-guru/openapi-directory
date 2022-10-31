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
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserPoolClientsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
