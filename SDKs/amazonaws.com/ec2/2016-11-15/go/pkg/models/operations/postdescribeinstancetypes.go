package operations

type PostDescribeInstanceTypesActionEnum string

const (
	PostDescribeInstanceTypesActionEnumDescribeInstanceTypes PostDescribeInstanceTypesActionEnum = "DescribeInstanceTypes"
)

type PostDescribeInstanceTypesVersionEnum string

const (
	PostDescribeInstanceTypesVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceTypesVersionEnum = "2016-11-15"
)

type PostDescribeInstanceTypesQueryParams struct {
	Action     PostDescribeInstanceTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                              `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                              `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeInstanceTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInstanceTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeInstanceTypesRequest struct {
	QueryParams PostDescribeInstanceTypesQueryParams
	Headers     PostDescribeInstanceTypesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInstanceTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
