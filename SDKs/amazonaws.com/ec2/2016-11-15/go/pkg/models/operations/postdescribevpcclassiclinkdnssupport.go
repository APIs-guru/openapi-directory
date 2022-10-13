package operations

type PostDescribeVpcClassicLinkDNSSupportActionEnum string

const (
	PostDescribeVpcClassicLinkDNSSupportActionEnumDescribeVpcClassicLinkDNSSupport PostDescribeVpcClassicLinkDNSSupportActionEnum = "DescribeVpcClassicLinkDnsSupport"
)

type PostDescribeVpcClassicLinkDNSSupportVersionEnum string

const (
	PostDescribeVpcClassicLinkDNSSupportVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcClassicLinkDNSSupportVersionEnum = "2016-11-15"
)

type PostDescribeVpcClassicLinkDNSSupportQueryParams struct {
	Action     PostDescribeVpcClassicLinkDNSSupportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                         `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                         `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcClassicLinkDNSSupportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcClassicLinkDNSSupportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcClassicLinkDNSSupportRequest struct {
	QueryParams PostDescribeVpcClassicLinkDNSSupportQueryParams
	Headers     PostDescribeVpcClassicLinkDNSSupportHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcClassicLinkDNSSupportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
