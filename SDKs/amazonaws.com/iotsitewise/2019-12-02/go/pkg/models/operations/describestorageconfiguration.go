package operations

import (
"openapi/pkg/models/shared")

type DescribeStorageConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeStorageConfigurationRequest struct {
    Headers DescribeStorageConfigurationHeaders 
    
}

type DescribeStorageConfigurationResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    DescribeStorageConfigurationResponse *shared.DescribeStorageConfigurationResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

