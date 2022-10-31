package operations

import (
"openapi/pkg/models/shared")

type UpdateIntegrationPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
    
}

type UpdateIntegrationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateIntegrationRequestBodyConnectionTypeEnum string

const (
    UpdateIntegrationRequestBodyConnectionTypeEnumInternet UpdateIntegrationRequestBodyConnectionTypeEnum = "INTERNET"
UpdateIntegrationRequestBodyConnectionTypeEnumVpcLink UpdateIntegrationRequestBodyConnectionTypeEnum = "VPC_LINK"
)



type UpdateIntegrationRequestBodyContentHandlingStrategyEnum string

const (
    UpdateIntegrationRequestBodyContentHandlingStrategyEnumConvertToBinary UpdateIntegrationRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_BINARY"
UpdateIntegrationRequestBodyContentHandlingStrategyEnumConvertToText UpdateIntegrationRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_TEXT"
)



type UpdateIntegrationRequestBodyIntegrationTypeEnum string

const (
    UpdateIntegrationRequestBodyIntegrationTypeEnumAws UpdateIntegrationRequestBodyIntegrationTypeEnum = "AWS"
UpdateIntegrationRequestBodyIntegrationTypeEnumHTTP UpdateIntegrationRequestBodyIntegrationTypeEnum = "HTTP"
UpdateIntegrationRequestBodyIntegrationTypeEnumMock UpdateIntegrationRequestBodyIntegrationTypeEnum = "MOCK"
UpdateIntegrationRequestBodyIntegrationTypeEnumHTTPProxy UpdateIntegrationRequestBodyIntegrationTypeEnum = "HTTP_PROXY"
UpdateIntegrationRequestBodyIntegrationTypeEnumAwsProxy UpdateIntegrationRequestBodyIntegrationTypeEnum = "AWS_PROXY"
)



type UpdateIntegrationRequestBodyPassthroughBehaviorEnum string

const (
    UpdateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoMatch UpdateIntegrationRequestBodyPassthroughBehaviorEnum = "WHEN_NO_MATCH"
UpdateIntegrationRequestBodyPassthroughBehaviorEnumNever UpdateIntegrationRequestBodyPassthroughBehaviorEnum = "NEVER"
UpdateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoTemplates UpdateIntegrationRequestBodyPassthroughBehaviorEnum = "WHEN_NO_TEMPLATES"
)


type UpdateIntegrationRequestBodyTLSConfig struct {
    ServerNameToVerify *string `json:"ServerNameToVerify,omitempty"`
    
}

type UpdateIntegrationRequestBody struct {
    ConnectionID *string `json:"connectionId,omitempty"`
    ConnectionType *UpdateIntegrationRequestBodyConnectionTypeEnum `json:"connectionType,omitempty"`
    ContentHandlingStrategy *UpdateIntegrationRequestBodyContentHandlingStrategyEnum `json:"contentHandlingStrategy,omitempty"`
    CredentialsArn *string `json:"credentialsArn,omitempty"`
    Description *string `json:"description,omitempty"`
    IntegrationMethod *string `json:"integrationMethod,omitempty"`
    IntegrationSubtype *string `json:"integrationSubtype,omitempty"`
    IntegrationType *UpdateIntegrationRequestBodyIntegrationTypeEnum `json:"integrationType,omitempty"`
    IntegrationURI *string `json:"integrationUri,omitempty"`
    PassthroughBehavior *UpdateIntegrationRequestBodyPassthroughBehaviorEnum `json:"passthroughBehavior,omitempty"`
    PayloadFormatVersion *string `json:"payloadFormatVersion,omitempty"`
    RequestParameters map[string]string `json:"requestParameters,omitempty"`
    RequestTemplates map[string]string `json:"requestTemplates,omitempty"`
    ResponseParameters map[string]map[string]string `json:"responseParameters,omitempty"`
    TemplateSelectionExpression *string `json:"templateSelectionExpression,omitempty"`
    TimeoutInMillis *int64 `json:"timeoutInMillis,omitempty"`
    TLSConfig *UpdateIntegrationRequestBodyTLSConfig `json:"tlsConfig,omitempty"`
    
}

type UpdateIntegrationRequest struct {
    PathParams UpdateIntegrationPathParams 
    Headers UpdateIntegrationHeaders 
    Request UpdateIntegrationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateIntegrationResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateIntegrationResult *shared.UpdateIntegrationResult 
    
}

