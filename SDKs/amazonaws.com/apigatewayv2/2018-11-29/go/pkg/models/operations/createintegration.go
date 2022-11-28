package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIntegrationPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateIntegrationRequestBodyConnectionTypeEnum string

const (
	CreateIntegrationRequestBodyConnectionTypeEnumInternet CreateIntegrationRequestBodyConnectionTypeEnum = "INTERNET"
	CreateIntegrationRequestBodyConnectionTypeEnumVpcLink  CreateIntegrationRequestBodyConnectionTypeEnum = "VPC_LINK"
)

type CreateIntegrationRequestBodyContentHandlingStrategyEnum string

const (
	CreateIntegrationRequestBodyContentHandlingStrategyEnumConvertToBinary CreateIntegrationRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_BINARY"
	CreateIntegrationRequestBodyContentHandlingStrategyEnumConvertToText   CreateIntegrationRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_TEXT"
)

type CreateIntegrationRequestBodyIntegrationTypeEnum string

const (
	CreateIntegrationRequestBodyIntegrationTypeEnumAws       CreateIntegrationRequestBodyIntegrationTypeEnum = "AWS"
	CreateIntegrationRequestBodyIntegrationTypeEnumHTTP      CreateIntegrationRequestBodyIntegrationTypeEnum = "HTTP"
	CreateIntegrationRequestBodyIntegrationTypeEnumMock      CreateIntegrationRequestBodyIntegrationTypeEnum = "MOCK"
	CreateIntegrationRequestBodyIntegrationTypeEnumHTTPProxy CreateIntegrationRequestBodyIntegrationTypeEnum = "HTTP_PROXY"
	CreateIntegrationRequestBodyIntegrationTypeEnumAwsProxy  CreateIntegrationRequestBodyIntegrationTypeEnum = "AWS_PROXY"
)

type CreateIntegrationRequestBodyPassthroughBehaviorEnum string

const (
	CreateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoMatch     CreateIntegrationRequestBodyPassthroughBehaviorEnum = "WHEN_NO_MATCH"
	CreateIntegrationRequestBodyPassthroughBehaviorEnumNever           CreateIntegrationRequestBodyPassthroughBehaviorEnum = "NEVER"
	CreateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoTemplates CreateIntegrationRequestBodyPassthroughBehaviorEnum = "WHEN_NO_TEMPLATES"
)

// CreateIntegrationRequestBodyTLSConfig
// The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
type CreateIntegrationRequestBodyTLSConfig struct {
	ServerNameToVerify *string `json:"ServerNameToVerify,omitempty"`
}

type CreateIntegrationRequestBody struct {
	ConnectionID                *string                                                  `json:"connectionId,omitempty"`
	ConnectionType              *CreateIntegrationRequestBodyConnectionTypeEnum          `json:"connectionType,omitempty"`
	ContentHandlingStrategy     *CreateIntegrationRequestBodyContentHandlingStrategyEnum `json:"contentHandlingStrategy,omitempty"`
	CredentialsArn              *string                                                  `json:"credentialsArn,omitempty"`
	Description                 *string                                                  `json:"description,omitempty"`
	IntegrationMethod           *string                                                  `json:"integrationMethod,omitempty"`
	IntegrationSubtype          *string                                                  `json:"integrationSubtype,omitempty"`
	IntegrationType             CreateIntegrationRequestBodyIntegrationTypeEnum          `json:"integrationType"`
	IntegrationURI              *string                                                  `json:"integrationUri,omitempty"`
	PassthroughBehavior         *CreateIntegrationRequestBodyPassthroughBehaviorEnum     `json:"passthroughBehavior,omitempty"`
	PayloadFormatVersion        *string                                                  `json:"payloadFormatVersion,omitempty"`
	RequestParameters           map[string]string                                        `json:"requestParameters,omitempty"`
	RequestTemplates            map[string]string                                        `json:"requestTemplates,omitempty"`
	ResponseParameters          map[string]map[string]string                             `json:"responseParameters,omitempty"`
	TemplateSelectionExpression *string                                                  `json:"templateSelectionExpression,omitempty"`
	TimeoutInMillis             *int64                                                   `json:"timeoutInMillis,omitempty"`
	TLSConfig                   *CreateIntegrationRequestBodyTLSConfig                   `json:"tlsConfig,omitempty"`
}

type CreateIntegrationRequest struct {
	PathParams CreateIntegrationPathParams
	Headers    CreateIntegrationHeaders
	Request    CreateIntegrationRequestBody `request:"mediaType=application/json"`
}

type CreateIntegrationResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateIntegrationResult  *shared.CreateIntegrationResult
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
