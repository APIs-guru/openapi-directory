package operations

import (
	"openapi/pkg/models/shared"
)

type StartDeploymentPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
}

type StartDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type StartDeploymentRequestBody struct {
	JobID     *string `json:"jobId,omitempty"`
	SourceURL *string `json:"sourceUrl,omitempty"`
}

type StartDeploymentRequest struct {
	PathParams StartDeploymentPathParams
	Headers    StartDeploymentHeaders
	Request    StartDeploymentRequestBody `request:"mediaType=application/json"`
}

type StartDeploymentResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StartDeploymentResult    *shared.StartDeploymentResult
	StatusCode               int64
	UnauthorizedException    *interface{}
}
