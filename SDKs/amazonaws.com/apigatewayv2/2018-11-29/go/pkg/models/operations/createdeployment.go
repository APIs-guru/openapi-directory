package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
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
	Description *string `json:"description,omitempty"`
	StageName   *string `json:"stageName,omitempty"`
}

type CreateDeploymentRequest struct {
	PathParams CreateDeploymentPathParams
	Headers    CreateDeploymentHeaders
	Request    CreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateDeploymentResponse *shared.CreateDeploymentResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
