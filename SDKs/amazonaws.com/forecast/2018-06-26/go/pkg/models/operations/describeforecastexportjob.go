package operations

import (
"openapi/pkg/models/shared")


type DescribeForecastExportJobXAmzTargetEnum string

const (
    DescribeForecastExportJobXAmzTargetEnumAmazonForecastDescribeForecastExportJob DescribeForecastExportJobXAmzTargetEnum = "AmazonForecast.DescribeForecastExportJob"
)


type DescribeForecastExportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeForecastExportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeForecastExportJobRequest struct {
    Headers DescribeForecastExportJobHeaders 
    Request shared.DescribeForecastExportJobRequest `request:"mediaType=application/json"`
    
}

type DescribeForecastExportJobResponse struct {
    ContentType string 
    DescribeForecastExportJobResponse *shared.DescribeForecastExportJobResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

