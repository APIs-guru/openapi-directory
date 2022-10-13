package operations

import (
	"openapi/pkg/models/shared"
)

type PatchAppsAppIDKeysKeyIDPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
	KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
}

type PatchAppsAppIDKeysKeyIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PatchAppsAppIDKeysKeyIDRequest struct {
	PathParams PatchAppsAppIDKeysKeyIDPathParams
	Request    *shared.KeyPatch `request:"mediaType=application/json"`
	Security   PatchAppsAppIDKeysKeyIDSecurity
}

type PatchAppsAppIDKeysKeyIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	KeyResponse *shared.KeyResponse
}
