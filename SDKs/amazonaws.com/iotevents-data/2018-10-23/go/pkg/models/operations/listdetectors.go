package operations

import (
	"openapi/pkg/models/shared"
)

type ListDetectorsPathParams struct {
	DetectorModelName string `pathParam:"style=simple,explode=false,name=detectorModelName"`
}

type ListDetectorsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
	StateName  *string `queryParam:"style=form,explode=true,name=stateName"`
}

type ListDetectorsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDetectorsRequest struct {
	PathParams  ListDetectorsPathParams
	QueryParams ListDetectorsQueryParams
	Headers     ListDetectorsHeaders
}

type ListDetectorsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListDetectorsResponse       *shared.ListDetectorsResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
