package operations

import (
"openapi/pkg/models/shared")

type ReportingBundleStatusSummaryQueryParams struct {
    BundleID string `queryParam:"style=form,explode=true,name=BundleID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type ReportingBundleStatusSummaryRequest struct {
    QueryParams ReportingBundleStatusSummaryQueryParams 
    
}

type ReportingBundleStatusSummaryResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsPackageStatusSummary *shared.APIPagedResponseUpdateSystemModelsPackageStatusSummary 
    ContentType string 
    StatusCode int64 
    
}

