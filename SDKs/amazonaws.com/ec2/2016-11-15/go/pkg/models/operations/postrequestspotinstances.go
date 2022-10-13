package operations

type PostRequestSpotInstancesActionEnum string

const (
	PostRequestSpotInstancesActionEnumRequestSpotInstances PostRequestSpotInstancesActionEnum = "RequestSpotInstances"
)

type PostRequestSpotInstancesVersionEnum string

const (
	PostRequestSpotInstancesVersionEnumTwoThousandAndSixteen1115 PostRequestSpotInstancesVersionEnum = "2016-11-15"
)

type PostRequestSpotInstancesQueryParams struct {
	Action  PostRequestSpotInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRequestSpotInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRequestSpotInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRequestSpotInstancesRequest struct {
	QueryParams PostRequestSpotInstancesQueryParams
	Headers     PostRequestSpotInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRequestSpotInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
