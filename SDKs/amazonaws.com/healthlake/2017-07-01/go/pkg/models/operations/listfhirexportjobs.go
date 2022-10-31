package operations

import (
	"openapi/pkg/models/shared"
)

type ListFhirExportJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFhirExportJobsXAmzTargetEnum string

const (
	ListFhirExportJobsXAmzTargetEnumHealthLakeListFhirExportJobs ListFhirExportJobsXAmzTargetEnum = "HealthLake.ListFHIRExportJobs"
)

type ListFhirExportJobsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFhirExportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListFhirExportJobsRequest struct {
	QueryParams ListFhirExportJobsQueryParams
	Headers     ListFhirExportJobsHeaders
	Request     shared.ListFhirExportJobsRequest `request:"mediaType=application/json"`
}

type ListFhirExportJobsResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListFhirExportJobsResponse *shared.ListFhirExportJobsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
