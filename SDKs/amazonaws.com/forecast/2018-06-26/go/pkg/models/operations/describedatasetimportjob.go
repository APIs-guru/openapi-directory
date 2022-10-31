package operations

import (
"openapi/pkg/models/shared")


type DescribeDatasetImportJobXAmzTargetEnum string

const (
    DescribeDatasetImportJobXAmzTargetEnumAmazonForecastDescribeDatasetImportJob DescribeDatasetImportJobXAmzTargetEnum = "AmazonForecast.DescribeDatasetImportJob"
)


type DescribeDatasetImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDatasetImportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDatasetImportJobRequest struct {
    Headers DescribeDatasetImportJobHeaders 
    Request shared.DescribeDatasetImportJobRequest `request:"mediaType=application/json"`
    
}

type DescribeDatasetImportJobResponse struct {
    ContentType string 
    DescribeDatasetImportJobResponse *shared.DescribeDatasetImportJobResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

