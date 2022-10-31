package operations

import (
"openapi/pkg/models/shared")


type CreatePartitionIndexXAmzTargetEnum string

const (
    CreatePartitionIndexXAmzTargetEnumAwsGlueCreatePartitionIndex CreatePartitionIndexXAmzTargetEnum = "AWSGlue.CreatePartitionIndex"
)


type CreatePartitionIndexHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePartitionIndexXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePartitionIndexRequest struct {
    Headers CreatePartitionIndexHeaders 
    Request shared.CreatePartitionIndexRequest `request:"mediaType=application/json"`
    
}

type CreatePartitionIndexResponse struct {
    AlreadyExistsException *interface{} 
    ContentType string 
    CreatePartitionIndexResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

