package operations

import (
	"openapi/pkg/models/shared"
)

type AdminUserGlobalSignOutXAmzTargetEnum string

const (
	AdminUserGlobalSignOutXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUserGlobalSignOut AdminUserGlobalSignOutXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut"
)

type AdminUserGlobalSignOutHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AdminUserGlobalSignOutXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AdminUserGlobalSignOutRequest struct {
	Headers AdminUserGlobalSignOutHeaders
	Request shared.AdminUserGlobalSignOutRequest `request:"mediaType=application/json"`
}

type AdminUserGlobalSignOutResponse struct {
	AdminUserGlobalSignOutResponse map[string]interface{}
	ContentType                    string
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UserNotFoundException          *interface{}
}
