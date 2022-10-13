package operations

import (
	"openapi/pkg/models/shared"
)

type ListDetectorModelVersionsPathParams struct {
	DetectorModelName string `pathParam:"style=simple,explode=false,name=detectorModelName"`
}

type ListDetectorModelVersionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDetectorModelVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDetectorModelVersionsRequest struct {
	PathParams  ListDetectorModelVersionsPathParams
	QueryParams ListDetectorModelVersionsQueryParams
	Headers     ListDetectorModelVersionsHeaders
}

type ListDetectorModelVersionsResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ListDetectorModelVersionsResponse *shared.ListDetectorModelVersionsResponse
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
}
