package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserProfileXAmzTargetEnum string

const (
	DeleteUserProfileXAmzTargetEnumCodeStar20170419DeleteUserProfile DeleteUserProfileXAmzTargetEnum = "CodeStar_20170419.DeleteUserProfile"
)

type DeleteUserProfileHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserProfileRequest struct {
	Headers DeleteUserProfileHeaders
	Request shared.DeleteUserProfileRequest `request:"mediaType=application/json"`
}

type DeleteUserProfileResponse struct {
	ContentType             string
	DeleteUserProfileResult *shared.DeleteUserProfileResult
	StatusCode              int64
	ValidationException     *interface{}
}
