package operations

import (
	"openapi/pkg/models/shared"
)

type ResetDeploymentsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type ResetDeploymentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

type ResetDeploymentsRequestBody struct {
	Force *bool `json:"Force,omitempty"`
}

type ResetDeploymentsRequest struct {
	PathParams ResetDeploymentsPathParams
	Headers    ResetDeploymentsHeaders
	Request    ResetDeploymentsRequestBody `request:"mediaType=application/json"`
}

type ResetDeploymentsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	ResetDeploymentsResponse *shared.ResetDeploymentsResponse
	StatusCode               int64
}
