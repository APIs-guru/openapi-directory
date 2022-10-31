package operations

import (
"openapi/pkg/models/shared")


type DeletePredictorBacktestExportJobXAmzTargetEnum string

const (
    DeletePredictorBacktestExportJobXAmzTargetEnumAmazonForecastDeletePredictorBacktestExportJob DeletePredictorBacktestExportJobXAmzTargetEnum = "AmazonForecast.DeletePredictorBacktestExportJob"
)


type DeletePredictorBacktestExportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeletePredictorBacktestExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeletePredictorBacktestExportJobRequest struct {
    Headers DeletePredictorBacktestExportJobHeaders 
    Request shared.DeletePredictorBacktestExportJobRequest `request:"mediaType=application/json"`
    
}

type DeletePredictorBacktestExportJobResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

