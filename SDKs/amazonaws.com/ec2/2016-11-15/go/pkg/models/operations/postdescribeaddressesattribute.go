package operations

type PostDescribeAddressesAttributeActionEnum string

const (
	PostDescribeAddressesAttributeActionEnumDescribeAddressesAttribute PostDescribeAddressesAttributeActionEnum = "DescribeAddressesAttribute"
)

type PostDescribeAddressesAttributeVersionEnum string

const (
	PostDescribeAddressesAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeAddressesAttributeVersionEnum = "2016-11-15"
)

type PostDescribeAddressesAttributeQueryParams struct {
	Action     PostDescribeAddressesAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                   `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeAddressesAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAddressesAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAddressesAttributeRequest struct {
	QueryParams PostDescribeAddressesAttributeQueryParams
	Headers     PostDescribeAddressesAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAddressesAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
