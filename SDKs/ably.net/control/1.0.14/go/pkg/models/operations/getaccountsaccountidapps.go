package operations

import (
"openapi/pkg/models/shared")

type GetAccountsAccountIDAppsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type GetAccountsAccountIDAppsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAccountsAccountIDAppsRequest struct {
    PathParams GetAccountsAccountIDAppsPathParams 
    Security GetAccountsAccountIDAppsSecurity 
    
}

type GetAccountsAccountIDAppsResponse struct {
    ContentType string 
    StatusCode int64 
    AppResponses []shared.AppResponse 
    Error *shared.Error 
    
}

