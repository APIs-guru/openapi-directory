package operations

import (
	"openapi/pkg/models/shared"
)

type ListIdentityPoolsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListIdentityPoolsXAmzTargetEnum string

const (
	ListIdentityPoolsXAmzTargetEnumAwsCognitoIdentityServiceListIdentityPools ListIdentityPoolsXAmzTargetEnum = "AWSCognitoIdentityService.ListIdentityPools"
)

type ListIdentityPoolsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListIdentityPoolsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListIdentityPoolsRequest struct {
	QueryParams ListIdentityPoolsQueryParams
	Headers     ListIdentityPoolsHeaders
	Request     shared.ListIdentityPoolsInput `request:"mediaType=application/json"`
}

type ListIdentityPoolsResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListIdentityPoolsResponse *shared.ListIdentityPoolsResponse
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
