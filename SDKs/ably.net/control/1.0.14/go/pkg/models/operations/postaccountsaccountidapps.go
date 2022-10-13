package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountsAccountIDAppsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
}

type PostAccountsAccountIDAppsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostAccountsAccountIDAppsRequest struct {
	PathParams PostAccountsAccountIDAppsPathParams
	Request    *shared.AppPost `request:"mediaType=application/json"`
	Security   PostAccountsAccountIDAppsSecurity
}

type PostAccountsAccountIDAppsResponse struct {
	ContentType string
	StatusCode  int64
	AppResponse *shared.AppResponse
	Error       *shared.Error
}
