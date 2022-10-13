package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIntegrationPathParams struct {
	APIID         string `pathParam:"style=simple,explode=false,name=apiId"`
	IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
}

type UpdateIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIntegrationRequestBodyConnectionTypeEnum string

const (
	UpdateIntegrationRequestBodyConnectionTypeEnumInternet UpdateIntegrationRequestBodyConnectionTypeEnum = "INTERNET"
	UpdateIntegrationRequestBodyConnectionTypeEnumVpcLink  UpdateIntegrationRequestBodyConnectionTypeEnum = "VPC_LINK"
)

type UpdateIntegrationRequestBodyContentHandlingStrategyEnum string

const (
	UpdateIntegrationRequestBodyContentHandlingStrategyEnumConvertToBinary UpdateIntegrationRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_BINARY"
	UpdateIntegrationRequestBodyContentHandlingStrategyEnumConvertToText   UpdateIntegrationRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_TEXT"
)

type UpdateIntegrationRequestBodyIntegrationTypeEnum string

const (
	UpdateIntegrationRequestBodyIntegrationTypeEnumAws       UpdateIntegrationRequestBodyIntegrationTypeEnum = "AWS"
	UpdateIntegrationRequestBodyIntegrationTypeEnumHTTP      UpdateIntegrationRequestBodyIntegrationTypeEnum = "HTTP"
	UpdateIntegrationRequestBodyIntegrationTypeEnumMock      UpdateIntegrationRequestBodyIntegrationTypeEnum = "MOCK"
	UpdateIntegrationRequestBodyIntegrationTypeEnumHTTPProxy UpdateIntegrationRequestBodyIntegrationTypeEnum = "HTTP_PROXY"
	UpdateIntegrationRequestBodyIntegrationTypeEnumAwsProxy  UpdateIntegrationRequestBodyIntegrationTypeEnum = "AWS_PROXY"
)

type UpdateIntegrationRequestBodyPassthroughBehaviorEnum string

const (
	UpdateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoMatch     UpdateIntegrationRequestBodyPassthroughBehaviorEnum = "WHEN_NO_MATCH"
	UpdateIntegrationRequestBodyPassthroughBehaviorEnumNever           UpdateIntegrationRequestBodyPassthroughBehaviorEnum = "NEVER"
	UpdateIntegrationRequestBodyPassthroughBehaviorEnumWhenNoTemplates UpdateIntegrationRequestBodyPassthroughBehaviorEnum = "WHEN_NO_TEMPLATES"
)

type UpdateIntegrationRequestBodyTLSConfig struct {
	ServerNameToVerify *string `json:"ServerNameToVerify"`
}

type UpdateIntegrationRequestBody struct {
	ConnectionID                *string                                                  `json:"connectionId"`
	ConnectionType              *UpdateIntegrationRequestBodyConnectionTypeEnum          `json:"connectionType"`
	ContentHandlingStrategy     *UpdateIntegrationRequestBodyContentHandlingStrategyEnum `json:"contentHandlingStrategy"`
	CredentialsArn              *string                                                  `json:"credentialsArn"`
	Description                 *string                                                  `json:"description"`
	IntegrationMethod           *string                                                  `json:"integrationMethod"`
	IntegrationSubtype          *string                                                  `json:"integrationSubtype"`
	IntegrationType             *UpdateIntegrationRequestBodyIntegrationTypeEnum         `json:"integrationType"`
	IntegrationURI              *string                                                  `json:"integrationUri"`
	PassthroughBehavior         *UpdateIntegrationRequestBodyPassthroughBehaviorEnum     `json:"passthroughBehavior"`
	PayloadFormatVersion        *string                                                  `json:"payloadFormatVersion"`
	RequestParameters           map[string]string                                        `json:"requestParameters"`
	RequestTemplates            map[string]string                                        `json:"requestTemplates"`
	ResponseParameters          map[string]map[string]string                             `json:"responseParameters"`
	TemplateSelectionExpression *string                                                  `json:"templateSelectionExpression"`
	TimeoutInMillis             *int64                                                   `json:"timeoutInMillis"`
	TLSConfig                   *UpdateIntegrationRequestBodyTLSConfig                   `json:"tlsConfig"`
}

type UpdateIntegrationRequest struct {
	PathParams UpdateIntegrationPathParams
	Headers    UpdateIntegrationHeaders
	Request    UpdateIntegrationRequestBody `request:"mediaType=application/json"`
}

type UpdateIntegrationResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateIntegrationResult  *shared.UpdateIntegrationResult
}
