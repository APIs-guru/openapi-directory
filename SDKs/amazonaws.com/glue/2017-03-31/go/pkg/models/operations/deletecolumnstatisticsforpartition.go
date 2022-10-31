package operations

import (
"openapi/pkg/models/shared")


type DeleteColumnStatisticsForPartitionXAmzTargetEnum string

const (
    DeleteColumnStatisticsForPartitionXAmzTargetEnumAwsGlueDeleteColumnStatisticsForPartition DeleteColumnStatisticsForPartitionXAmzTargetEnum = "AWSGlue.DeleteColumnStatisticsForPartition"
)


type DeleteColumnStatisticsForPartitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteColumnStatisticsForPartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteColumnStatisticsForPartitionRequest struct {
    Headers DeleteColumnStatisticsForPartitionHeaders 
    Request shared.DeleteColumnStatisticsForPartitionRequest `request:"mediaType=application/json"`
    
}

type DeleteColumnStatisticsForPartitionResponse struct {
    ContentType string 
    DeleteColumnStatisticsForPartitionResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

