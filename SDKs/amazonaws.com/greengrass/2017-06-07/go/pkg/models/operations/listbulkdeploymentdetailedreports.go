package operations

import (
	"openapi/pkg/models/shared"
)

type ListBulkDeploymentDetailedReportsPathParams struct {
	BulkDeploymentID string `pathParam:"style=simple,explode=false,name=BulkDeploymentId"`
}

type ListBulkDeploymentDetailedReportsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListBulkDeploymentDetailedReportsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListBulkDeploymentDetailedReportsRequest struct {
	PathParams  ListBulkDeploymentDetailedReportsPathParams
	QueryParams ListBulkDeploymentDetailedReportsQueryParams
	Headers     ListBulkDeploymentDetailedReportsHeaders
}

type ListBulkDeploymentDetailedReportsResponse struct {
	BadRequestException                       *interface{}
	ContentType                               string
	ListBulkDeploymentDetailedReportsResponse *shared.ListBulkDeploymentDetailedReportsResponse
	StatusCode                                int64
}
