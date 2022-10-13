package operations

type PostDescribeTrafficMirrorTargetsActionEnum string

const (
	PostDescribeTrafficMirrorTargetsActionEnumDescribeTrafficMirrorTargets PostDescribeTrafficMirrorTargetsActionEnum = "DescribeTrafficMirrorTargets"
)

type PostDescribeTrafficMirrorTargetsVersionEnum string

const (
	PostDescribeTrafficMirrorTargetsVersionEnumTwoThousandAndSixteen1115 PostDescribeTrafficMirrorTargetsVersionEnum = "2016-11-15"
)

type PostDescribeTrafficMirrorTargetsQueryParams struct {
	Action     PostDescribeTrafficMirrorTargetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTrafficMirrorTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTrafficMirrorTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTrafficMirrorTargetsRequest struct {
	QueryParams PostDescribeTrafficMirrorTargetsQueryParams
	Headers     PostDescribeTrafficMirrorTargetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTrafficMirrorTargetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
