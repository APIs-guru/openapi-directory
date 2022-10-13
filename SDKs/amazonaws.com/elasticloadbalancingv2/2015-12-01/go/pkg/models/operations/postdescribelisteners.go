package operations

type PostDescribeListenersActionEnum string

const (
	PostDescribeListenersActionEnumDescribeListeners PostDescribeListenersActionEnum = "DescribeListeners"
)

type PostDescribeListenersVersionEnum string

const (
	PostDescribeListenersVersionEnumTwoThousandAndFifteen1201 PostDescribeListenersVersionEnum = "2015-12-01"
)

type PostDescribeListenersQueryParams struct {
	Action  PostDescribeListenersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker  *string                          `queryParam:"style=form,explode=true,name=Marker"`
	Version PostDescribeListenersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeListenersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeListenersRequest struct {
	QueryParams PostDescribeListenersQueryParams
	Headers     PostDescribeListenersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeListenersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
