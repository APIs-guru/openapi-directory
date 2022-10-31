package operations

import (
"openapi/pkg/models/shared")


type DescribePredictorXAmzTargetEnum string

const (
    DescribePredictorXAmzTargetEnumAmazonForecastDescribePredictor DescribePredictorXAmzTargetEnum = "AmazonForecast.DescribePredictor"
)


type DescribePredictorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePredictorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePredictorRequest struct {
    Headers DescribePredictorHeaders 
    Request shared.DescribePredictorRequest `request:"mediaType=application/json"`
    
}

type DescribePredictorResponse struct {
    ContentType string 
    DescribePredictorResponse *shared.DescribePredictorResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

