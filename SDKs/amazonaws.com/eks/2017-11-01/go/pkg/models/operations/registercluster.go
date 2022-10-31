package operations

import (
"openapi/pkg/models/shared")

type RegisterClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RegisterClusterRequestBodyConnectorConfig struct {
    Provider *shared.ConnectorConfigProviderEnum `json:"provider,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

type RegisterClusterRequestBody struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    ConnectorConfig RegisterClusterRequestBodyConnectorConfig `json:"connectorConfig"`
    Name string `json:"name"`
    
}

type RegisterClusterRequest struct {
    Headers RegisterClusterHeaders 
    Request RegisterClusterRequestBody `request:"mediaType=application/json"`
    
}

type RegisterClusterResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    RegisterClusterResponse *shared.RegisterClusterResponse 
    ResourceLimitExceededException *interface{} 
    ServerException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

