package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAppsIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAppsIDRequest struct {
	PathParams DeleteAppsIDPathParams
	Security   DeleteAppsIDSecurity
}

type DeleteAppsIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
