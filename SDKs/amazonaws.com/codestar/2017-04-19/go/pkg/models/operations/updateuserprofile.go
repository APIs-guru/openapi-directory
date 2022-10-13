package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserProfileXAmzTargetEnum string

const (
	UpdateUserProfileXAmzTargetEnumCodeStar20170419UpdateUserProfile UpdateUserProfileXAmzTargetEnum = "CodeStar_20170419.UpdateUserProfile"
)

type UpdateUserProfileHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateUserProfileRequest struct {
	Headers UpdateUserProfileHeaders
	Request shared.UpdateUserProfileRequest `request:"mediaType=application/json"`
}

type UpdateUserProfileResponse struct {
	ContentType                  string
	StatusCode                   int64
	UpdateUserProfileResult      *shared.UpdateUserProfileResult
	UserProfileNotFoundException *interface{}
	ValidationException          *interface{}
}
