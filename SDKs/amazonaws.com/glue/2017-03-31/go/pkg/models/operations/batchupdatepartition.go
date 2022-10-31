package operations

import (
"openapi/pkg/models/shared")


type BatchUpdatePartitionXAmzTargetEnum string

const (
    BatchUpdatePartitionXAmzTargetEnumAwsGlueBatchUpdatePartition BatchUpdatePartitionXAmzTargetEnum = "AWSGlue.BatchUpdatePartition"
)


type BatchUpdatePartitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchUpdatePartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchUpdatePartitionRequest struct {
    Headers BatchUpdatePartitionHeaders 
    Request shared.BatchUpdatePartitionRequest `request:"mediaType=application/json"`
    
}

type BatchUpdatePartitionResponse struct {
    BatchUpdatePartitionResponse *shared.BatchUpdatePartitionResponse 
    ContentType string 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

