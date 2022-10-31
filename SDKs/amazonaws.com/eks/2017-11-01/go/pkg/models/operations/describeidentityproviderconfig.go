package operations

import (
"openapi/pkg/models/shared")

type DescribeIdentityProviderConfigPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DescribeIdentityProviderConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig struct {
    Name *string `json:"name,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type DescribeIdentityProviderConfigRequestBody struct {
    IdentityProviderConfig DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig `json:"identityProviderConfig"`
    
}

type DescribeIdentityProviderConfigRequest struct {
    PathParams DescribeIdentityProviderConfigPathParams 
    Headers DescribeIdentityProviderConfigHeaders 
    Request DescribeIdentityProviderConfigRequestBody `request:"mediaType=application/json"`
    
}

type DescribeIdentityProviderConfigResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeIdentityProviderConfigResponse *shared.DescribeIdentityProviderConfigResponse 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

