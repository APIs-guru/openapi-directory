package operations

import (
"openapi/pkg/models/shared")

type CreateEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateEnvironmentRequestBodyFederationModeEnum string

const (
    CreateEnvironmentRequestBodyFederationModeEnumFederated CreateEnvironmentRequestBodyFederationModeEnum = "FEDERATED"
CreateEnvironmentRequestBodyFederationModeEnumLocal CreateEnvironmentRequestBodyFederationModeEnum = "LOCAL"
)


type CreateEnvironmentRequestBodyFederationParameters struct {
    ApplicationCallBackURL *string `json:"applicationCallBackURL,omitempty"`
    AttributeMap map[string]string `json:"attributeMap,omitempty"`
    FederationProviderName *string `json:"federationProviderName,omitempty"`
    FederationUrn *string `json:"federationURN,omitempty"`
    SamlMetadataDocument *string `json:"samlMetadataDocument,omitempty"`
    SamlMetadataURL *string `json:"samlMetadataURL,omitempty"`
    
}

type CreateEnvironmentRequestBody struct {
    Description *string `json:"description,omitempty"`
    FederationMode *CreateEnvironmentRequestBodyFederationModeEnum `json:"federationMode,omitempty"`
    FederationParameters *CreateEnvironmentRequestBodyFederationParameters `json:"federationParameters,omitempty"`
    KmsKeyID *string `json:"kmsKeyId,omitempty"`
    Name string `json:"name"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateEnvironmentRequest struct {
    Headers CreateEnvironmentHeaders 
    Request CreateEnvironmentRequestBody `request:"mediaType=application/json"`
    
}

type CreateEnvironmentResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateEnvironmentResponse *shared.CreateEnvironmentResponse 
    InternalServerException *interface{} 
    LimitExceededException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

