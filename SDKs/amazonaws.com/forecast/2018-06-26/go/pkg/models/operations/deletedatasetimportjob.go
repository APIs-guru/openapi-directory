package operations

import (
"openapi/pkg/models/shared")


type DeleteDatasetImportJobXAmzTargetEnum string

const (
    DeleteDatasetImportJobXAmzTargetEnumAmazonForecastDeleteDatasetImportJob DeleteDatasetImportJobXAmzTargetEnum = "AmazonForecast.DeleteDatasetImportJob"
)


type DeleteDatasetImportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDatasetImportJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDatasetImportJobRequest struct {
    Headers DeleteDatasetImportJobHeaders 
    Request shared.DeleteDatasetImportJobRequest `request:"mediaType=application/json"`
    
}

type DeleteDatasetImportJobResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

