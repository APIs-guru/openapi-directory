package operations

import (
	"openapi/pkg/models/shared"
)

type GetDetectorModelAnalysisResultsPathParams struct {
	AnalysisID string `pathParam:"style=simple,explode=false,name=analysisId"`
}

type GetDetectorModelAnalysisResultsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetDetectorModelAnalysisResultsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetectorModelAnalysisResultsRequest struct {
	PathParams  GetDetectorModelAnalysisResultsPathParams
	QueryParams GetDetectorModelAnalysisResultsQueryParams
	Headers     GetDetectorModelAnalysisResultsHeaders
}

type GetDetectorModelAnalysisResultsResponse struct {
	ContentType                             string
	GetDetectorModelAnalysisResultsResponse *shared.GetDetectorModelAnalysisResultsResponse
	InternalFailureException                *interface{}
	InvalidRequestException                 *interface{}
	ResourceNotFoundException               *interface{}
	ServiceUnavailableException             *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
}
