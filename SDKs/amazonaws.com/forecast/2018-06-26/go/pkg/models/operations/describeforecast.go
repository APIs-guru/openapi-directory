package operations

import (
"openapi/pkg/models/shared")


type DescribeForecastXAmzTargetEnum string

const (
    DescribeForecastXAmzTargetEnumAmazonForecastDescribeForecast DescribeForecastXAmzTargetEnum = "AmazonForecast.DescribeForecast"
)


type DescribeForecastHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeForecastXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeForecastRequest struct {
    Headers DescribeForecastHeaders 
    Request shared.DescribeForecastRequest `request:"mediaType=application/json"`
    
}

type DescribeForecastResponse struct {
    ContentType string 
    DescribeForecastResponse *shared.DescribeForecastResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

