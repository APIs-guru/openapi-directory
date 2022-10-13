package operations

type PostDescribeAddressesActionEnum string

const (
	PostDescribeAddressesActionEnumDescribeAddresses PostDescribeAddressesActionEnum = "DescribeAddresses"
)

type PostDescribeAddressesVersionEnum string

const (
	PostDescribeAddressesVersionEnumTwoThousandAndSixteen1115 PostDescribeAddressesVersionEnum = "2016-11-15"
)

type PostDescribeAddressesQueryParams struct {
	Action  PostDescribeAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAddressesRequest struct {
	QueryParams PostDescribeAddressesQueryParams
	Headers     PostDescribeAddressesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
