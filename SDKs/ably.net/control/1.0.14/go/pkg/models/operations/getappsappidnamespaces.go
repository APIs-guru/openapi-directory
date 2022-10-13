package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppsAppIDNamespacesPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type GetAppsAppIDNamespacesSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAppsAppIDNamespacesRequest struct {
	PathParams GetAppsAppIDNamespacesPathParams
	Security   GetAppsAppIDNamespacesSecurity
}

type GetAppsAppIDNamespacesResponse struct {
	ContentType        string
	StatusCode         int64
	Error              *shared.Error
	NamespaceResponses []shared.NamespaceResponse
}
