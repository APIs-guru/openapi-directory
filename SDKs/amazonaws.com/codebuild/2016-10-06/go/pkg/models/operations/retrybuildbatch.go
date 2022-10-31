package operations

import (
"openapi/pkg/models/shared")


type RetryBuildBatchXAmzTargetEnum string

const (
    RetryBuildBatchXAmzTargetEnumCodeBuild20161006RetryBuildBatch RetryBuildBatchXAmzTargetEnum = "CodeBuild_20161006.RetryBuildBatch"
)


type RetryBuildBatchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RetryBuildBatchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RetryBuildBatchRequest struct {
    Headers RetryBuildBatchHeaders 
    Request shared.RetryBuildBatchInput `request:"mediaType=application/json"`
    
}

type RetryBuildBatchResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    RetryBuildBatchOutput *shared.RetryBuildBatchOutput 
    StatusCode int64 
    
}

