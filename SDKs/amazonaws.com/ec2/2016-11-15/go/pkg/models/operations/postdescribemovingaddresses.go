package operations

type PostDescribeMovingAddressesActionEnum string

const (
	PostDescribeMovingAddressesActionEnumDescribeMovingAddresses PostDescribeMovingAddressesActionEnum = "DescribeMovingAddresses"
)

type PostDescribeMovingAddressesVersionEnum string

const (
	PostDescribeMovingAddressesVersionEnumTwoThousandAndSixteen1115 PostDescribeMovingAddressesVersionEnum = "2016-11-15"
)

type PostDescribeMovingAddressesQueryParams struct {
	Action     PostDescribeMovingAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeMovingAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeMovingAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeMovingAddressesRequest struct {
	QueryParams PostDescribeMovingAddressesQueryParams
	Headers     PostDescribeMovingAddressesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeMovingAddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
