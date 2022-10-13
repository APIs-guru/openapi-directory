package operations

import (
	"openapi/pkg/models/shared"
)

type ListUserPoolsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListUserPoolsXAmzTargetEnum string

const (
	ListUserPoolsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserPools ListUserPoolsXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListUserPools"
)

type ListUserPoolsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserPoolsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListUserPoolsRequest struct {
	QueryParams ListUserPoolsQueryParams
	Headers     ListUserPoolsHeaders
	Request     shared.ListUserPoolsRequest `request:"mediaType=application/json"`
}

type ListUserPoolsResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListUserPoolsResponse     *shared.ListUserPoolsResponse
	NotAuthorizedException    *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
