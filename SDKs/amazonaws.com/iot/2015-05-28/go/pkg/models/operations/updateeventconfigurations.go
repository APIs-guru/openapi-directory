package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEventConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEventConfigurationsRequestBody struct {
	EventConfigurations map[string]shared.Configuration `json:"eventConfigurations,omitempty"`
}

type UpdateEventConfigurationsRequest struct {
	Headers UpdateEventConfigurationsHeaders
	Request UpdateEventConfigurationsRequestBody `request:"mediaType=application/json"`
}

type UpdateEventConfigurationsResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UpdateEventConfigurationsResponse map[string]interface{}
}
