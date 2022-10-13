package operations

import (
	"openapi/pkg/models/shared"
)

type ListDocumentClassificationJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDocumentClassificationJobsXAmzTargetEnum string

const (
	ListDocumentClassificationJobsXAmzTargetEnumComprehend20171127ListDocumentClassificationJobs ListDocumentClassificationJobsXAmzTargetEnum = "Comprehend_20171127.ListDocumentClassificationJobs"
)

type ListDocumentClassificationJobsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDocumentClassificationJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDocumentClassificationJobsRequest struct {
	QueryParams ListDocumentClassificationJobsQueryParams
	Headers     ListDocumentClassificationJobsHeaders
	Request     shared.ListDocumentClassificationJobsRequest `request:"mediaType=application/json"`
}

type ListDocumentClassificationJobsResponse struct {
	ContentType                            string
	InternalServerException                *interface{}
	InvalidFilterException                 *interface{}
	InvalidRequestException                *interface{}
	ListDocumentClassificationJobsResponse *shared.ListDocumentClassificationJobsResponse
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
