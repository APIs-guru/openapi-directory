package operations

type PostDescribeTrafficMirrorSessionsActionEnum string

const (
	PostDescribeTrafficMirrorSessionsActionEnumDescribeTrafficMirrorSessions PostDescribeTrafficMirrorSessionsActionEnum = "DescribeTrafficMirrorSessions"
)

type PostDescribeTrafficMirrorSessionsVersionEnum string

const (
	PostDescribeTrafficMirrorSessionsVersionEnumTwoThousandAndSixteen1115 PostDescribeTrafficMirrorSessionsVersionEnum = "2016-11-15"
)

type PostDescribeTrafficMirrorSessionsQueryParams struct {
	Action     PostDescribeTrafficMirrorSessionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                      `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                      `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTrafficMirrorSessionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTrafficMirrorSessionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeTrafficMirrorSessionsRequest struct {
	QueryParams PostDescribeTrafficMirrorSessionsQueryParams
	Headers     PostDescribeTrafficMirrorSessionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTrafficMirrorSessionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
