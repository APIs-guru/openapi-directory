package operations

import (
"openapi/pkg/models/shared")


type BatchGetPartitionXAmzTargetEnum string

const (
    BatchGetPartitionXAmzTargetEnumAwsGlueBatchGetPartition BatchGetPartitionXAmzTargetEnum = "AWSGlue.BatchGetPartition"
)


type BatchGetPartitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchGetPartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchGetPartitionRequest struct {
    Headers BatchGetPartitionHeaders 
    Request shared.BatchGetPartitionRequest `request:"mediaType=application/json"`
    
}

type BatchGetPartitionResponse struct {
    BatchGetPartitionResponse *shared.BatchGetPartitionResponse 
    ContentType string 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

