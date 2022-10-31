package operations

import (
"openapi/pkg/models/shared")


type SubmitContainerStateChangeXAmzTargetEnum string

const (
    SubmitContainerStateChangeXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitContainerStateChange SubmitContainerStateChangeXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"
)


type SubmitContainerStateChangeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SubmitContainerStateChangeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SubmitContainerStateChangeRequest struct {
    Headers SubmitContainerStateChangeHeaders 
    Request shared.SubmitContainerStateChangeRequest `request:"mediaType=application/json"`
    
}

type SubmitContainerStateChangeResponse struct {
    AccessDeniedException *interface{} 
    ClientException *interface{} 
    ContentType string 
    ServerException *interface{} 
    StatusCode int64 
    SubmitContainerStateChangeResponse *shared.SubmitContainerStateChangeResponse 
    
}

