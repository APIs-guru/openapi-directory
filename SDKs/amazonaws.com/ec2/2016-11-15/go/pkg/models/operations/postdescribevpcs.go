package operations

type PostDescribeVpcsActionEnum string

const (
	PostDescribeVpcsActionEnumDescribeVpcs PostDescribeVpcsActionEnum = "DescribeVpcs"
)

type PostDescribeVpcsVersionEnum string

const (
	PostDescribeVpcsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcsVersionEnum = "2016-11-15"
)

type PostDescribeVpcsQueryParams struct {
	Action     PostDescribeVpcsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcsRequest struct {
	QueryParams PostDescribeVpcsQueryParams
	Headers     PostDescribeVpcsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
