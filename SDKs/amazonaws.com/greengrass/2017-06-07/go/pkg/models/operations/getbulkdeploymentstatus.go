package operations

import (
	"openapi/pkg/models/shared"
)

type GetBulkDeploymentStatusPathParams struct {
	BulkDeploymentID string `pathParam:"style=simple,explode=false,name=BulkDeploymentId"`
}

type GetBulkDeploymentStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBulkDeploymentStatusRequest struct {
	PathParams GetBulkDeploymentStatusPathParams
	Headers    GetBulkDeploymentStatusHeaders
}

type GetBulkDeploymentStatusResponse struct {
	BadRequestException             *interface{}
	ContentType                     string
	GetBulkDeploymentStatusResponse *shared.GetBulkDeploymentStatusResponse
	StatusCode                      int64
}
