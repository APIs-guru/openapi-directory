package operations

import (
	"openapi/pkg/models/shared"
)

type PermissionsPostPermissionRequests struct {
	APIModelsPermission  *shared.APIModelsPermission `request:"mediaType=application/json"`
	APIModelsPermission1 *shared.APIModelsPermission `request:"mediaType=application/x-www-form-urlencoded"`
	APIModelsPermission2 *shared.APIModelsPermission `request:"mediaType=text/json"`
	ApplicationXML       []byte                      `request:"mediaType=application/xml"`
	TextXML              []byte                      `request:"mediaType=text/xml"`
}

type PermissionsPostPermissionRequest struct {
	Request PermissionsPostPermissionRequests
}

type PermissionsPostPermissionResponse struct {
	Body                                                    []byte
	ContentType                                             string
	PermissionsPostPermission200ApplicationJSONInt32Integer *int32
	PermissionsPostPermission200TextJSONInt32Integer        *int32
	StatusCode                                              int64
}
