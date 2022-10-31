package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
}

type GetDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeploymentRequest struct {
	PathParams GetDeploymentPathParams
	Headers    GetDeploymentHeaders
}

type GetDeploymentResponse struct {
	ContentType              string
	GetDeploymentResponse    *shared.GetDeploymentResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
