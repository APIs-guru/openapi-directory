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
	ApplicationCallBackURL *string           `json:"applicationCallBackURL,omitempty"`
	AttributeMap           map[string]string `json:"attributeMap,omitempty"`
	FederationProviderName *string           `json:"federationProviderName,omitempty"`
	FederationUrn          *string           `json:"federationURN,omitempty"`
	SamlMetadataDocument   *string           `json:"samlMetadataDocument,omitempty"`
	SamlMetadataURL        *string           `json:"samlMetadataURL,omitempty"`
}

type UpdateEnvironmentRequestBody struct {
	Description          *string                                           `json:"description,omitempty"`
	FederationMode       *UpdateEnvironmentRequestBodyFederationModeEnum   `json:"federationMode,omitempty"`
	FederationParameters *UpdateEnvironmentRequestBodyFederationParameters `json:"federationParameters,omitempty"`
	Name                 *string                                           `json:"name,omitempty"`
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
