package operations

import (
"openapi/pkg/models/shared")


type SetRepositoryPolicyXAmzTargetEnum string

const (
    SetRepositoryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921SetRepositoryPolicy SetRepositoryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy"
)


type SetRepositoryPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetRepositoryPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetRepositoryPolicyRequest struct {
    Headers SetRepositoryPolicyHeaders 
    Request shared.SetRepositoryPolicyRequest `request:"mediaType=application/json"`
    
}

type SetRepositoryPolicyResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    SetRepositoryPolicyResponse *shared.SetRepositoryPolicyResponse 
    StatusCode int64 
    
}

