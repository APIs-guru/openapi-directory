package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIntegrationResponsePathParams struct {
	APIID         string `pathParam:"style=simple,explode=false,name=apiId"`
	IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
}

type CreateIntegrationResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum string

const (
	CreateIntegrationResponseRequestBodyContentHandlingStrategyEnumConvertToBinary CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_BINARY"
	CreateIntegrationResponseRequestBodyContentHandlingStrategyEnumConvertToText   CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_TEXT"
)

type CreateIntegrationResponseRequestBody struct {
	ContentHandlingStrategy     *CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum `json:"contentHandlingStrategy"`
	IntegrationResponseKey      string                                                           `json:"integrationResponseKey"`
	ResponseParameters          map[string]string                                                `json:"responseParameters"`
	ResponseTemplates           map[string]string                                                `json:"responseTemplates"`
	TemplateSelectionExpression *string                                                          `json:"templateSelectionExpression"`
}

type CreateIntegrationResponseRequest struct {
	PathParams CreateIntegrationResponsePathParams
	Headers    CreateIntegrationResponseHeaders
	Request    CreateIntegrationResponseRequestBody `request:"mediaType=application/json"`
}

type CreateIntegrationResponseResponse struct {
	BadRequestException               *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	CreateIntegrationResponseResponse *shared.CreateIntegrationResponseResponse
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
