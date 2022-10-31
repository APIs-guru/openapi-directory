package operations

import (
"openapi/pkg/models/shared")


type BatchDeleteTableXAmzTargetEnum string

const (
    BatchDeleteTableXAmzTargetEnumAwsGlueBatchDeleteTable BatchDeleteTableXAmzTargetEnum = "AWSGlue.BatchDeleteTable"
)


type BatchDeleteTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchDeleteTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchDeleteTableRequest struct {
    Headers BatchDeleteTableHeaders 
    Request shared.BatchDeleteTableRequest `request:"mediaType=application/json"`
    
}

type BatchDeleteTableResponse struct {
    BatchDeleteTableResponse *shared.BatchDeleteTableResponse 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

