package operations

import (
	"openapi/pkg/models/shared"
)

type StartCostEstimationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// StartCostEstimationRequestBodyResourceCollection
// Information about a filter used to specify which AWS resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
type StartCostEstimationRequestBodyResourceCollection struct {
	CloudFormation *shared.CloudFormationCostEstimationResourceCollectionFilter `json:"CloudFormation,omitempty"`
}

type StartCostEstimationRequestBody struct {
	ClientToken        *string                                          `json:"ClientToken,omitempty"`
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
