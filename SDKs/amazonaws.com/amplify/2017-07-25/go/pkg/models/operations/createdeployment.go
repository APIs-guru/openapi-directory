package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
}

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDeploymentRequestBody struct {
	FileMap map[string]string `json:"fileMap"`
}

type CreateDeploymentRequest struct {
	PathParams CreateDeploymentPathParams
	Headers    CreateDeploymentHeaders
	Request    CreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	CreateDeploymentResult   *shared.CreateDeploymentResult
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
