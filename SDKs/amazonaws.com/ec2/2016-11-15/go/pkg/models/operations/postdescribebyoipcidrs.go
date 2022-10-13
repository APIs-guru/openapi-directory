package operations

type PostDescribeByoipCidrsActionEnum string

const (
	PostDescribeByoipCidrsActionEnumDescribeByoipCidrs PostDescribeByoipCidrsActionEnum = "DescribeByoipCidrs"
)

type PostDescribeByoipCidrsVersionEnum string

const (
	PostDescribeByoipCidrsVersionEnumTwoThousandAndSixteen1115 PostDescribeByoipCidrsVersionEnum = "2016-11-15"
)

type PostDescribeByoipCidrsQueryParams struct {
	Action     PostDescribeByoipCidrsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                           `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                           `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeByoipCidrsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeByoipCidrsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeByoipCidrsRequest struct {
	QueryParams PostDescribeByoipCidrsQueryParams
	Headers     PostDescribeByoipCidrsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeByoipCidrsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
