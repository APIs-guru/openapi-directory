package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIntegrationResponsePathParams struct {
	APIID                 string `pathParam:"style=simple,explode=false,name=apiId"`
	IntegrationID         string `pathParam:"style=simple,explode=false,name=integrationId"`
	IntegrationResponseID string `pathParam:"style=simple,explode=false,name=integrationResponseId"`
}

type UpdateIntegrationResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum string

const (
	UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnumConvertToBinary UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_BINARY"
	UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnumConvertToText   UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum = "CONVERT_TO_TEXT"
)

type UpdateIntegrationResponseRequestBody struct {
	ContentHandlingStrategy     *UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum `json:"contentHandlingStrategy,omitempty"`
	IntegrationResponseKey      *string                                                          `json:"integrationResponseKey,omitempty"`
	ResponseParameters          map[string]string                                                `json:"responseParameters,omitempty"`
	ResponseTemplates           map[string]string                                                `json:"responseTemplates,omitempty"`
	TemplateSelectionExpression *string                                                          `json:"templateSelectionExpression,omitempty"`
}

type UpdateIntegrationResponseRequest struct {
	PathParams UpdateIntegrationResponsePathParams
	Headers    UpdateIntegrationResponseHeaders
	Request    UpdateIntegrationResponseRequestBody `request:"mediaType=application/json"`
}

type UpdateIntegrationResponseResponse struct {
	BadRequestException               *interface{}
	ConflictException                 *interface{}
	ContentType                       string
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UpdateIntegrationResponseResponse *shared.UpdateIntegrationResponseResponse
}
