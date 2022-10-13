package operations

import (
	"openapi/pkg/models/shared"
)

type RolesPostRoleRequests struct {
	APIModelsRole  *shared.APIModelsRole `request:"mediaType=application/json"`
	APIModelsRole1 *shared.APIModelsRole `request:"mediaType=application/x-www-form-urlencoded"`
	APIModelsRole2 *shared.APIModelsRole `request:"mediaType=text/json"`
	ApplicationXML []byte                `request:"mediaType=application/xml"`
	TextXML        []byte                `request:"mediaType=text/xml"`
}

type RolesPostRoleRequest struct {
	Request RolesPostRoleRequests
}

type RolesPostRoleResponse struct {
	Body                                        []byte
	ContentType                                 string
	RolesPostRole200ApplicationJSONInt32Integer *int32
	RolesPostRole200TextJSONInt32Integer        *int32
	StatusCode                                  int64
}
