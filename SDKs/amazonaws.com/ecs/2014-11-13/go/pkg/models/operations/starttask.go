package operations

import (
"openapi/pkg/models/shared")


type StartTaskXAmzTargetEnum string

const (
    StartTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113StartTask StartTaskXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.StartTask"
)


type StartTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartTaskRequest struct {
    Headers StartTaskHeaders 
    Request shared.StartTaskRequest `request:"mediaType=application/json"`
    
}

type StartTaskResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StartTaskResponse *shared.StartTaskResponse 
    StatusCode int64 
    
}

