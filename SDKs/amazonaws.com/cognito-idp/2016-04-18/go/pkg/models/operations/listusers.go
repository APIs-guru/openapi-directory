package operations

import (
	"openapi/pkg/models/shared"
)

type ListUsersQueryParams struct {
	Limit           *string `queryParam:"style=form,explode=true,name=Limit"`
	PaginationToken *string `queryParam:"style=form,explode=true,name=PaginationToken"`
}

type ListUsersXAmzTargetEnum string

const (
	ListUsersXAmzTargetEnumAwsCognitoIdentityProviderServiceListUsers ListUsersXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListUsers"
)

type ListUsersHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUsersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListUsersRequest struct {
	QueryParams ListUsersQueryParams
	Headers     ListUsersHeaders
	Request     shared.ListUsersRequest `request:"mediaType=application/json"`
}

type ListUsersResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListUsersResponse         *shared.ListUsersResponse
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
