package operations

import (
"openapi/pkg/models/shared")

type ListPredictorBacktestExportJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListPredictorBacktestExportJobsXAmzTargetEnum string

const (
    ListPredictorBacktestExportJobsXAmzTargetEnumAmazonForecastListPredictorBacktestExportJobs ListPredictorBacktestExportJobsXAmzTargetEnum = "AmazonForecast.ListPredictorBacktestExportJobs"
)


type ListPredictorBacktestExportJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPredictorBacktestExportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPredictorBacktestExportJobsRequest struct {
    QueryParams ListPredictorBacktestExportJobsQueryParams 
    Headers ListPredictorBacktestExportJobsHeaders 
    Request shared.ListPredictorBacktestExportJobsRequest `request:"mediaType=application/json"`
    
}

type ListPredictorBacktestExportJobsResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    InvalidNextTokenException *interface{} 
    ListPredictorBacktestExportJobsResponse *shared.ListPredictorBacktestExportJobsResponse 
    StatusCode int64 
    
}

