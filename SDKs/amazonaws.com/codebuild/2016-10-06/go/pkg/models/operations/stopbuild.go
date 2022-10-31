package operations

import (
"openapi/pkg/models/shared")


type StopBuildXAmzTargetEnum string

const (
    StopBuildXAmzTargetEnumCodeBuild20161006StopBuild StopBuildXAmzTargetEnum = "CodeBuild_20161006.StopBuild"
)


type StopBuildHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopBuildXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopBuildRequest struct {
    Headers StopBuildHeaders 
    Request shared.StopBuildInput `request:"mediaType=application/json"`
    
}

type StopBuildResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopBuildOutput *shared.StopBuildOutput 
    
}

