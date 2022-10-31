package operations

import (
"openapi/pkg/models/shared")


type CreatePartitionXAmzTargetEnum string

const (
    CreatePartitionXAmzTargetEnumAwsGlueCreatePartition CreatePartitionXAmzTargetEnum = "AWSGlue.CreatePartition"
)


type CreatePartitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePartitionRequest struct {
    Headers CreatePartitionHeaders 
    Request shared.CreatePartitionRequest `request:"mediaType=application/json"`
    
}

type CreatePartitionResponse struct {
    AlreadyExistsException *interface{} 
    ContentType string 
    CreatePartitionResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

