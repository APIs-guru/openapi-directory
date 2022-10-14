package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTopicRuleDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateTopicRuleDestinationRequestBodyDestinationConfiguration struct {
	HTTPURLConfiguration *shared.HTTPURLDestinationConfiguration `json:"httpUrlConfiguration,omitempty"`
	VpcConfiguration     *shared.VpcDestinationConfiguration     `json:"vpcConfiguration,omitempty"`
}

type CreateTopicRuleDestinationRequestBody struct {
	DestinationConfiguration CreateTopicRuleDestinationRequestBodyDestinationConfiguration `json:"destinationConfiguration"`
}

type CreateTopicRuleDestinationRequest struct {
	Headers CreateTopicRuleDestinationHeaders
	Request CreateTopicRuleDestinationRequestBody `request:"mediaType=application/json"`
}

type CreateTopicRuleDestinationResponse struct {
	ConflictingResourceUpdateException *interface{}
	ContentType                        string
	CreateTopicRuleDestinationResponse *shared.CreateTopicRuleDestinationResponse
	InternalException                  *interface{}
	InvalidRequestException            *interface{}
	ResourceAlreadyExistsException     *interface{}
	ServiceUnavailableException        *interface{}
	StatusCode                         int64
}
