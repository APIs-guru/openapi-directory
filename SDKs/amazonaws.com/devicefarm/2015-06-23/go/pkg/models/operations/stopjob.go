package operations

import (
"openapi/pkg/models/shared")


type StopJobXAmzTargetEnum string

const (
    StopJobXAmzTargetEnumDeviceFarm20150623StopJob StopJobXAmzTargetEnum = "DeviceFarm_20150623.StopJob"
)


type StopJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopJobRequest struct {
    Headers StopJobHeaders 
    Request shared.StopJobRequest `request:"mediaType=application/json"`
    
}

type StopJobResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    StopJobResult *shared.StopJobResult 
    
}

