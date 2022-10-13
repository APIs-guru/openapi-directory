package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIntegrationPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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

type CreateIntegrationRequestBodyTLSConfig struct {
	ServerNameToVerify *string `json:"ServerNameToVerify"`
}

type CreateIntegrationRequestBody struct {
	ConnectionID                *string                                                  `json:"connectionId"`
	ConnectionType              *CreateIntegrationRequestBodyConnectionTypeEnum          `json:"connectionType"`
	ContentHandlingStrategy     *CreateIntegrationRequestBodyContentHandlingStrategyEnum `json:"contentHandlingStrategy"`
	CredentialsArn              *string                                                  `json:"credentialsArn"`
	Description                 *string                                                  `json:"description"`
	IntegrationMethod           *string                                                  `json:"integrationMethod"`
	IntegrationSubtype          *string                                                  `json:"integrationSubtype"`
	IntegrationType             CreateIntegrationRequestBodyIntegrationTypeEnum          `json:"integrationType"`
	IntegrationURI              *string                                                  `json:"integrationUri"`
	PassthroughBehavior         *CreateIntegrationRequestBodyPassthroughBehaviorEnum     `json:"passthroughBehavior"`
	PayloadFormatVersion        *string                                                  `json:"payloadFormatVersion"`
	RequestParameters           map[string]string                                        `json:"requestParameters"`
	RequestTemplates            map[string]string                                        `json:"requestTemplates"`
	ResponseParameters          map[string]map[string]string                             `json:"responseParameters"`
	TemplateSelectionExpression *string                                                  `json:"templateSelectionExpression"`
	TimeoutInMillis             *int64                                                   `json:"timeoutInMillis"`
	TLSConfig                   *CreateIntegrationRequestBodyTLSConfig                   `json:"tlsConfig"`
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
