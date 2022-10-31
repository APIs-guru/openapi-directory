package operations

import (
"openapi/pkg/models/shared")

type AuthorizationCodesGetAuthorizationCodesQueryParams struct {
    Code *string `queryParam:"style=form,explode=true,name=code"`
    CreatedByUserID *int32 `queryParam:"style=form,explode=true,name=createdByUserID"`
    DefinitionID *string `queryParam:"style=form,explode=true,name=definitionID"`
    DeletedByUserID *int32 `queryParam:"style=form,explode=true,name=deletedByUserID"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type AuthorizationCodesGetAuthorizationCodesRequest struct {
    QueryParams AuthorizationCodesGetAuthorizationCodesQueryParams 
    
}

type AuthorizationCodesGetAuthorizationCodesResponse struct {
    APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode *shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

