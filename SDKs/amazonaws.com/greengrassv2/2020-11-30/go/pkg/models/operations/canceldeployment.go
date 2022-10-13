package operations

import (
	"openapi/pkg/models/shared"
)

type CancelDeploymentPathParams struct {
	DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
}

type CancelDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelDeploymentRequest struct {
	PathParams CancelDeploymentPathParams
	Headers    CancelDeploymentHeaders
}

type CancelDeploymentResponse struct {
	AccessDeniedException     *interface{}
	CancelDeploymentResponse  *shared.CancelDeploymentResponse
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
