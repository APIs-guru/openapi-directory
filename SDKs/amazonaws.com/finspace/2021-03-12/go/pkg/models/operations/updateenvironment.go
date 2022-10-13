package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type UpdateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEnvironmentRequestBodyFederationModeEnum string

const (
	UpdateEnvironmentRequestBodyFederationModeEnumFederated UpdateEnvironmentRequestBodyFederationModeEnum = "FEDERATED"
	UpdateEnvironmentRequestBodyFederationModeEnumLocal     UpdateEnvironmentRequestBodyFederationModeEnum = "LOCAL"
)

type UpdateEnvironmentRequestBodyFederationParameters struct {
	ApplicationCallBackURL *string           `json:"applicationCallBackURL"`
	AttributeMap           map[string]string `json:"attributeMap"`
	FederationProviderName *string           `json:"federationProviderName"`
	FederationUrn          *string           `json:"federationURN"`
	SamlMetadataDocument   *string           `json:"samlMetadataDocument"`
	SamlMetadataURL        *string           `json:"samlMetadataURL"`
}

type UpdateEnvironmentRequestBody struct {
	Description          *string                                           `json:"description"`
	FederationMode       *UpdateEnvironmentRequestBodyFederationModeEnum   `json:"federationMode"`
	FederationParameters *UpdateEnvironmentRequestBodyFederationParameters `json:"federationParameters"`
	Name                 *string                                           `json:"name"`
}

type UpdateEnvironmentRequest struct {
	PathParams UpdateEnvironmentPathParams
	Headers    UpdateEnvironmentHeaders
	Request    UpdateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type UpdateEnvironmentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateEnvironmentResponse *shared.UpdateEnvironmentResponse
	ValidationException       *interface{}
}
