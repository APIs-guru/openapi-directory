package operations

import (
"openapi/pkg/models/shared")


type GetRegistryPolicyXAmzTargetEnum string

const (
    GetRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetRegistryPolicy GetRegistryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy"
)


type GetRegistryPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetRegistryPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetRegistryPolicyRequest struct {
    Headers GetRegistryPolicyHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetRegistryPolicyResponse struct {
    ContentType string 
    GetRegistryPolicyResponse *shared.GetRegistryPolicyResponse 
    InvalidParameterException *interface{} 
    RegistryPolicyNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

