package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImagePermissionsXAmzTargetEnum string

const (
	DeleteImagePermissionsXAmzTargetEnumPhotonAdminProxyServiceDeleteImagePermissions DeleteImagePermissionsXAmzTargetEnum = "PhotonAdminProxyService.DeleteImagePermissions"
)

type DeleteImagePermissionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteImagePermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteImagePermissionsRequest struct {
	Headers DeleteImagePermissionsHeaders
	Request shared.DeleteImagePermissionsRequest `request:"mediaType=application/json"`
}

type DeleteImagePermissionsResponse struct {
	ContentType                   string
	DeleteImagePermissionsResult  map[string]interface{}
	ResourceNotAvailableException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
