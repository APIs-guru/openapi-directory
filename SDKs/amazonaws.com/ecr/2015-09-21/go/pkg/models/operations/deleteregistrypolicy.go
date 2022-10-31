package operations

import (
"openapi/pkg/models/shared")


type DeleteRegistryPolicyXAmzTargetEnum string

const (
    DeleteRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteRegistryPolicy DeleteRegistryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy"
)


type DeleteRegistryPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteRegistryPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteRegistryPolicyRequest struct {
    Headers DeleteRegistryPolicyHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DeleteRegistryPolicyResponse struct {
    ContentType string 
    DeleteRegistryPolicyResponse *shared.DeleteRegistryPolicyResponse 
    InvalidParameterException *interface{} 
    RegistryPolicyNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

