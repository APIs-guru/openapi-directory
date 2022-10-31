package operations

import (
"openapi/pkg/models/shared")


type DescribeDatasetXAmzTargetEnum string

const (
    DescribeDatasetXAmzTargetEnumAmazonForecastDescribeDataset DescribeDatasetXAmzTargetEnum = "AmazonForecast.DescribeDataset"
)


type DescribeDatasetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDatasetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDatasetRequest struct {
    Headers DescribeDatasetHeaders 
    Request shared.DescribeDatasetRequest `request:"mediaType=application/json"`
    
}

type DescribeDatasetResponse struct {
    ContentType string 
    DescribeDatasetResponse *shared.DescribeDatasetResponse 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

