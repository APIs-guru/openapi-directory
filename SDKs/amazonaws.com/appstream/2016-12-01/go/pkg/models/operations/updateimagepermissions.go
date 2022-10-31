package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateImagePermissionsXAmzTargetEnum string

const (
	UpdateImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceUpdateImagePermissions UpdateImagePermissionsXAmzTargetEnum = "PhotonAdminProxyService.UpdateImagePermissions"
)

type UpdateImagePermissionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateImagePermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
