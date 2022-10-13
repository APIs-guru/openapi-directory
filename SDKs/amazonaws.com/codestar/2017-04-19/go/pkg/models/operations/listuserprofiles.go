package operations

import (
	"openapi/pkg/models/shared"
)

type ListUserProfilesXAmzTargetEnum string

const (
	ListUserProfilesXAmzTargetEnumCodeStar20170419ListUserProfiles ListUserProfilesXAmzTargetEnum = "CodeStar_20170419.ListUserProfiles"
)

type ListUserProfilesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserProfilesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListUserProfilesRequest struct {
	Headers ListUserProfilesHeaders
	Request shared.ListUserProfilesRequest `request:"mediaType=application/json"`
}

type ListUserProfilesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListUserProfilesResult    *shared.ListUserProfilesResult
	StatusCode                int64
	ValidationException       *interface{}
}
