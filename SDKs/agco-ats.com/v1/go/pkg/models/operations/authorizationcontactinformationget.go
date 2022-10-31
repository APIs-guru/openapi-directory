package operations

import (
"time"
"openapi/pkg/models/shared")

type AuthorizationContactInformationGetQueryParams struct {
    AfterDate *time.Time `queryParam:"style=form,explode=true,name=afterDate"`
    AuthorizationCode *string `queryParam:"style=form,explode=true,name=authorizationCode"`
    BeforeDate *time.Time `queryParam:"style=form,explode=true,name=beforeDate"`
    DealerCode *string `queryParam:"style=form,explode=true,name=dealerCode"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type AuthorizationContactInformationGetRequest struct {
    QueryParams AuthorizationContactInformationGetQueryParams 
    
}

type AuthorizationContactInformationGetResponse struct {
    APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation *shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

