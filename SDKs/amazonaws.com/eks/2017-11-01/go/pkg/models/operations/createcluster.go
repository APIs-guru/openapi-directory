package operations

import (
"openapi/pkg/models/shared")

type CreateClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateClusterRequestBodyKubernetesNetworkConfig struct {
    ServiceIpv4Cidr *string `json:"serviceIpv4Cidr,omitempty"`
    
}

type CreateClusterRequestBodyLogging struct {
    ClusterLogging []shared.LogSetup `json:"clusterLogging,omitempty"`
    
}

type CreateClusterRequestBodyResourcesVpcConfig struct {
    EndpointPrivateAccess *bool `json:"endpointPrivateAccess,omitempty"`
    EndpointPublicAccess *bool `json:"endpointPublicAccess,omitempty"`
    PublicAccessCidrs []string `json:"publicAccessCidrs,omitempty"`
    SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
    SubnetIds []string `json:"subnetIds,omitempty"`
    
}

type CreateClusterRequestBody struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    EncryptionConfig []shared.EncryptionConfig `json:"encryptionConfig,omitempty"`
    KubernetesNetworkConfig *CreateClusterRequestBodyKubernetesNetworkConfig `json:"kubernetesNetworkConfig,omitempty"`
    Logging *CreateClusterRequestBodyLogging `json:"logging,omitempty"`
    Name string `json:"name"`
    ResourcesVpcConfig CreateClusterRequestBodyResourcesVpcConfig `json:"resourcesVpcConfig"`
    RoleArn string `json:"roleArn"`
    Tags map[string]string `json:"tags,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

type CreateClusterRequest struct {
    Headers CreateClusterHeaders 
    Request CreateClusterRequestBody `request:"mediaType=application/json"`
    
}

type CreateClusterResponse struct {
    ClientException *interface{} 
    ContentType string 
    CreateClusterResponse *shared.CreateClusterResponse 
    InvalidParameterException *interface{} 
    ResourceInUseException *interface{} 
    ResourceLimitExceededException *interface{} 
    ServerException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnsupportedAvailabilityZoneException *interface{} 
    
}

