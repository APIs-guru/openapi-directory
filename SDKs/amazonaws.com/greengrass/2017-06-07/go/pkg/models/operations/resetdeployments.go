package operations

import (
	"openapi/pkg/models/shared"
)

type ResetDeploymentsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type ResetDeploymentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
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
