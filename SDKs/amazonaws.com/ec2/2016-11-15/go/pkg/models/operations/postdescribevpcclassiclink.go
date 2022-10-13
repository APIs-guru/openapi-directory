package operations

type PostDescribeVpcClassicLinkActionEnum string

const (
	PostDescribeVpcClassicLinkActionEnumDescribeVpcClassicLink PostDescribeVpcClassicLinkActionEnum = "DescribeVpcClassicLink"
)

type PostDescribeVpcClassicLinkVersionEnum string

const (
	PostDescribeVpcClassicLinkVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcClassicLinkVersionEnum = "2016-11-15"
)

type PostDescribeVpcClassicLinkQueryParams struct {
	Action  PostDescribeVpcClassicLinkActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeVpcClassicLinkVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcClassicLinkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcClassicLinkRequest struct {
	QueryParams PostDescribeVpcClassicLinkQueryParams
	Headers     PostDescribeVpcClassicLinkHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcClassicLinkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
