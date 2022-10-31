package operations

import (
"openapi/pkg/models/shared")


type CreateDatasetGroupXAmzTargetEnum string

const (
    CreateDatasetGroupXAmzTargetEnumAmazonForecastCreateDatasetGroup CreateDatasetGroupXAmzTargetEnum = "AmazonForecast.CreateDatasetGroup"
)


type CreateDatasetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateDatasetGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateDatasetGroupRequest struct {
    Headers CreateDatasetGroupHeaders 
    Request shared.CreateDatasetGroupRequest `request:"mediaType=application/json"`
    
}

type CreateDatasetGroupResponse struct {
    ContentType string 
    CreateDatasetGroupResponse *shared.CreateDatasetGroupResponse 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

