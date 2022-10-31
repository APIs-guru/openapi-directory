package operations

type PostUnassignIpv6AddressesActionEnum string

const (
	PostUnassignIpv6AddressesActionEnumUnassignIpv6Addresses PostUnassignIpv6AddressesActionEnum = "UnassignIpv6Addresses"
)

type PostUnassignIpv6AddressesVersionEnum string

const (
	PostUnassignIpv6AddressesVersionEnumTwoThousandAndSixteen1115 PostUnassignIpv6AddressesVersionEnum = "2016-11-15"
)

type PostUnassignIpv6AddressesQueryParams struct {
	Action  PostUnassignIpv6AddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUnassignIpv6AddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUnassignIpv6AddressesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUnassignIpv6AddressesRequest struct {
	QueryParams PostUnassignIpv6AddressesQueryParams
	Headers     PostUnassignIpv6AddressesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUnassignIpv6AddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
