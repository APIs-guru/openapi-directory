package operations

import (
	"openapi/pkg/models/shared"
)

type PostAppsAppIDKeysPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type PostAppsAppIDKeysSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostAppsAppIDKeysRequest struct {
	PathParams PostAppsAppIDKeysPathParams
	Request    *shared.KeyPost `request:"mediaType=application/json"`
	Security   PostAppsAppIDKeysSecurity
}

type PostAppsAppIDKeysResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	KeyResponse *shared.KeyResponse
}
