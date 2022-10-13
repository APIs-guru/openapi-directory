package operations

type PostCancelSpotFleetRequestsActionEnum string

const (
	PostCancelSpotFleetRequestsActionEnumCancelSpotFleetRequests PostCancelSpotFleetRequestsActionEnum = "CancelSpotFleetRequests"
)

type PostCancelSpotFleetRequestsVersionEnum string

const (
	PostCancelSpotFleetRequestsVersionEnumTwoThousandAndSixteen1115 PostCancelSpotFleetRequestsVersionEnum = "2016-11-15"
)

type PostCancelSpotFleetRequestsQueryParams struct {
	Action  PostCancelSpotFleetRequestsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCancelSpotFleetRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCancelSpotFleetRequestsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCancelSpotFleetRequestsRequest struct {
	QueryParams PostCancelSpotFleetRequestsQueryParams
	Headers     PostCancelSpotFleetRequestsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCancelSpotFleetRequestsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
