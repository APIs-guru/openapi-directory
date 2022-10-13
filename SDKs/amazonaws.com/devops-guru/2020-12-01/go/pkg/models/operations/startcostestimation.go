package operations

import (
	"openapi/pkg/models/shared"
)

type StartCostEstimationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartCostEstimationRequestBodyResourceCollection struct {
	CloudFormation *shared.CloudFormationCostEstimationResourceCollectionFilter `json:"CloudFormation"`
}

type StartCostEstimationRequestBody struct {
	ClientToken        *string                                          `json:"ClientToken"`
	ResourceCollection StartCostEstimationRequestBodyResourceCollection `json:"ResourceCollection"`
}

type StartCostEstimationRequest struct {
	Headers StartCostEstimationHeaders
	Request StartCostEstimationRequestBody `request:"mediaType=application/json"`
}

type StartCostEstimationResponse struct {
	AccessDeniedException       *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StartCostEstimationResponse map[string]interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	ValidationException         *interface{}
}
