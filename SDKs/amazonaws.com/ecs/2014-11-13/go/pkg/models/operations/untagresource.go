package operations

import (
"openapi/pkg/models/shared")


type UntagResourceXAmzTargetEnum string

const (
    UntagResourceXAmzTargetEnumAmazonEc2ContainerServiceV20141113UntagResource UntagResourceXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UntagResource"
)


type UntagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UntagResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UntagResourceRequest struct {
    Headers UntagResourceHeaders 
    Request shared.UntagResourceRequest `request:"mediaType=application/json"`
    
}

type UntagResourceResponse struct {
    ClientException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    UntagResourceResponse map[string]interface{} 
    
}

