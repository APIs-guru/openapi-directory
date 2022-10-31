package operations

import (
	"openapi/pkg/models/shared"
)

type GetBulkDeploymentStatusPathParams struct {
	BulkDeploymentID string `pathParam:"style=simple,explode=false,name=BulkDeploymentId"`
}

type GetBulkDeploymentStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
