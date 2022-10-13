package operations

type PostDescribeInstanceStatusActionEnum string

const (
	PostDescribeInstanceStatusActionEnumDescribeInstanceStatus PostDescribeInstanceStatusActionEnum = "DescribeInstanceStatus"
)

type PostDescribeInstanceStatusVersionEnum string

const (
	PostDescribeInstanceStatusVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceStatusVersionEnum = "2016-11-15"
)

type PostDescribeInstanceStatusQueryParams struct {
	Action     PostDescribeInstanceStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                               `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                               `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeInstanceStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInstanceStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeInstanceStatusRequest struct {
	QueryParams PostDescribeInstanceStatusQueryParams
	Headers     PostDescribeInstanceStatusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInstanceStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
