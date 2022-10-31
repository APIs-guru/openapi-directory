package operations

import (
"openapi/pkg/models/shared")


type CreatePredictorBacktestExportJobXAmzTargetEnum string

const (
    CreatePredictorBacktestExportJobXAmzTargetEnumAmazonForecastCreatePredictorBacktestExportJob CreatePredictorBacktestExportJobXAmzTargetEnum = "AmazonForecast.CreatePredictorBacktestExportJob"
)


type CreatePredictorBacktestExportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePredictorBacktestExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePredictorBacktestExportJobRequest struct {
    Headers CreatePredictorBacktestExportJobHeaders 
    Request shared.CreatePredictorBacktestExportJobRequest `request:"mediaType=application/json"`
    
}

type CreatePredictorBacktestExportJobResponse struct {
    ContentType string 
    CreatePredictorBacktestExportJobResponse *shared.CreatePredictorBacktestExportJobResponse 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

