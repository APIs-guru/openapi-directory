package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentStatusPathParams struct {
	DeploymentID string `pathParam:"style=simple,explode=false,name=DeploymentId"`
	GroupID      string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type GetDeploymentStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeploymentStatusRequest struct {
	PathParams GetDeploymentStatusPathParams
	Headers    GetDeploymentStatusHeaders
}

type GetDeploymentStatusResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetDeploymentStatusResponse *shared.GetDeploymentStatusResponse
	StatusCode                  int64
}
