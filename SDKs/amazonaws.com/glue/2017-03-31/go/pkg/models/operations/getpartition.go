package operations

import (
"openapi/pkg/models/shared")


type GetPartitionXAmzTargetEnum string

const (
    GetPartitionXAmzTargetEnumAwsGlueGetPartition GetPartitionXAmzTargetEnum = "AWSGlue.GetPartition"
)


type GetPartitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetPartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetPartitionRequest struct {
    Headers GetPartitionHeaders 
    Request shared.GetPartitionRequest `request:"mediaType=application/json"`
    
}

type GetPartitionResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetPartitionResponse *shared.GetPartitionResponse 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

