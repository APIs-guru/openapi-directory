package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEnvironmentRequestBodyFederationModeEnum string

const (
	CreateEnvironmentRequestBodyFederationModeEnumFederated CreateEnvironmentRequestBodyFederationModeEnum = "FEDERATED"
	CreateEnvironmentRequestBodyFederationModeEnumLocal     CreateEnvironmentRequestBodyFederationModeEnum = "LOCAL"
)

type CreateEnvironmentRequestBodyFederationParameters struct {
	ApplicationCallBackURL *string           `json:"applicationCallBackURL"`
	AttributeMap           map[string]string `json:"attributeMap"`
	FederationProviderName *string           `json:"federationProviderName"`
	FederationUrn          *string           `json:"federationURN"`
	SamlMetadataDocument   *string           `json:"samlMetadataDocument"`
	SamlMetadataURL        *string           `json:"samlMetadataURL"`
}

type CreateEnvironmentRequestBody struct {
	Description          *string                                           `json:"description"`
	FederationMode       *CreateEnvironmentRequestBodyFederationModeEnum   `json:"federationMode"`
	FederationParameters *CreateEnvironmentRequestBodyFederationParameters `json:"federationParameters"`
	KmsKeyID             *string                                           `json:"kmsKeyId"`
	Name                 string                                            `json:"name"`
	Tags                 map[string]string                                 `json:"tags"`
}

type CreateEnvironmentRequest struct {
	Headers CreateEnvironmentHeaders
	Request CreateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type CreateEnvironmentResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateEnvironmentResponse     *shared.CreateEnvironmentResponse
	InternalServerException       *interface{}
	LimitExceededException        *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
