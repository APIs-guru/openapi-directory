package operations

import (
"openapi/pkg/models/shared")


type UpdateColumnStatisticsForPartitionXAmzTargetEnum string

const (
    UpdateColumnStatisticsForPartitionXAmzTargetEnumAwsGlueUpdateColumnStatisticsForPartition UpdateColumnStatisticsForPartitionXAmzTargetEnum = "AWSGlue.UpdateColumnStatisticsForPartition"
)


type UpdateColumnStatisticsForPartitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateColumnStatisticsForPartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateColumnStatisticsForPartitionRequest struct {
    Headers UpdateColumnStatisticsForPartitionHeaders 
    Request shared.UpdateColumnStatisticsForPartitionRequest `request:"mediaType=application/json"`
    
}

type UpdateColumnStatisticsForPartitionResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    UpdateColumnStatisticsForPartitionResponse *shared.UpdateColumnStatisticsForPartitionResponse 
    
}

