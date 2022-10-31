package operations

import (
"openapi/pkg/models/shared")


type PutAttributesXAmzTargetEnum string

const (
    PutAttributesXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutAttributes PutAttributesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.PutAttributes"
)


type PutAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutAttributesRequest struct {
    Headers PutAttributesHeaders 
    Request shared.PutAttributesRequest `request:"mediaType=application/json"`
    
}

type PutAttributesResponse struct {
    AttributeLimitExceededException *interface{} 
    ClusterNotFoundException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    PutAttributesResponse *shared.PutAttributesResponse 
    StatusCode int64 
    TargetNotFoundException *interface{} 
    
}

