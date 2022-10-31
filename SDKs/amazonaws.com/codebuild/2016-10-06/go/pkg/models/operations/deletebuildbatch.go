package operations

import (
"openapi/pkg/models/shared")


type DeleteBuildBatchXAmzTargetEnum string

const (
    DeleteBuildBatchXAmzTargetEnumCodeBuild20161006DeleteBuildBatch DeleteBuildBatchXAmzTargetEnum = "CodeBuild_20161006.DeleteBuildBatch"
)


type DeleteBuildBatchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteBuildBatchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteBuildBatchRequest struct {
    Headers DeleteBuildBatchHeaders 
    Request shared.DeleteBuildBatchInput `request:"mediaType=application/json"`
    
}

type DeleteBuildBatchResponse struct {
    ContentType string 
    DeleteBuildBatchOutput *shared.DeleteBuildBatchOutput 
    InvalidInputException *interface{} 
    StatusCode int64 
    
}

