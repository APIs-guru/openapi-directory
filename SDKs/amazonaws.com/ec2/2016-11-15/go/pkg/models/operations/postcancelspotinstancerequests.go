package operations

type PostCancelSpotInstanceRequestsActionEnum string

const (
	PostCancelSpotInstanceRequestsActionEnumCancelSpotInstanceRequests PostCancelSpotInstanceRequestsActionEnum = "CancelSpotInstanceRequests"
)

type PostCancelSpotInstanceRequestsVersionEnum string

const (
	PostCancelSpotInstanceRequestsVersionEnumTwoThousandAndSixteen1115 PostCancelSpotInstanceRequestsVersionEnum = "2016-11-15"
)

type PostCancelSpotInstanceRequestsQueryParams struct {
	Action  PostCancelSpotInstanceRequestsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCancelSpotInstanceRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCancelSpotInstanceRequestsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCancelSpotInstanceRequestsRequest struct {
	QueryParams PostCancelSpotInstanceRequestsQueryParams
	Headers     PostCancelSpotInstanceRequestsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCancelSpotInstanceRequestsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
