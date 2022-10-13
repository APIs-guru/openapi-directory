package operations

type PostRequestSpotFleetActionEnum string

const (
	PostRequestSpotFleetActionEnumRequestSpotFleet PostRequestSpotFleetActionEnum = "RequestSpotFleet"
)

type PostRequestSpotFleetVersionEnum string

const (
	PostRequestSpotFleetVersionEnumTwoThousandAndSixteen1115 PostRequestSpotFleetVersionEnum = "2016-11-15"
)

type PostRequestSpotFleetQueryParams struct {
	Action  PostRequestSpotFleetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRequestSpotFleetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRequestSpotFleetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRequestSpotFleetRequest struct {
	QueryParams PostRequestSpotFleetQueryParams
	Headers     PostRequestSpotFleetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRequestSpotFleetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
