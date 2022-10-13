package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDeploymentPathParams struct {
	DeploymentID string `pathParam:"style=simple,explode=false,name=deployment_id"`
	RestapiID    string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDeploymentRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations"`
}

type UpdateDeploymentRequest struct {
	PathParams UpdateDeploymentPathParams
	Headers    UpdateDeploymentHeaders
	Request    UpdateDeploymentRequestBody `request:"mediaType=application/json"`
}

type UpdateDeploymentResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	Deployment                  *shared.Deployment
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
	UnauthorizedException       *interface{}
}
