package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePermissionsXAmzTargetEnum string

const (
	UpdateImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceUpdateImagePermissions UpdateImagePermissionsXAmzTargetEnum = "PhotonAdminProxyService.UpdateImagePermissions"
)

type UpdateImagePermissionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateImagePermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateImagePermissionsRequest struct {
	Headers UpdateImagePermissionsHeaders
	Request shared.UpdateImagePermissionsRequest `request:"mediaType=application/json"`
}

type UpdateImagePermissionsResponse struct {
	ContentType                   string
	LimitExceededException        *interface{}
	ResourceNotAvailableException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UpdateImagePermissionsResult  map[string]interface{}
}
