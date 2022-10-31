package operations

import (
"openapi/pkg/models/shared")


type CreatePredictorXAmzTargetEnum string

const (
    CreatePredictorXAmzTargetEnumAmazonForecastCreatePredictor CreatePredictorXAmzTargetEnum = "AmazonForecast.CreatePredictor"
)


type CreatePredictorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePredictorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePredictorRequest struct {
    Headers CreatePredictorHeaders 
    Request shared.CreatePredictorRequest `request:"mediaType=application/json"`
    
}

type CreatePredictorResponse struct {
    ContentType string 
    CreatePredictorResponse *shared.CreatePredictorResponse 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

