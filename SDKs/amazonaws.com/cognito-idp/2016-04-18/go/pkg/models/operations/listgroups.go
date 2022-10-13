package operations

import (
	"openapi/pkg/models/shared"
)

type ListGroupsQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGroupsXAmzTargetEnum string

const (
	ListGroupsXAmzTargetEnumAwsCognitoIdentityProviderServiceListGroups ListGroupsXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListGroups"
)

type ListGroupsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListGroupsRequest struct {
	QueryParams ListGroupsQueryParams
	Headers     ListGroupsHeaders
	Request     shared.ListGroupsRequest `request:"mediaType=application/json"`
}

type ListGroupsResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListGroupsResponse        *shared.ListGroupsResponse
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
