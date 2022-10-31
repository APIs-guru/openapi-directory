package operations

import (
"openapi/pkg/models/shared")

type ReportingPackageStatusSummaryQueryParams struct {
    PackageID string `queryParam:"style=form,explode=true,name=PackageID"`
    
}

type ReportingPackageStatusSummaryRequest struct {
    QueryParams ReportingPackageStatusSummaryQueryParams 
    
}

type ReportingPackageStatusSummaryResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsPackageStatusSummary *shared.UpdateSystemModelsPackageStatusSummary 
    
}

