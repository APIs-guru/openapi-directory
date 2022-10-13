package operations

type PostAssignIpv6AddressesActionEnum string

const (
	PostAssignIpv6AddressesActionEnumAssignIpv6Addresses PostAssignIpv6AddressesActionEnum = "AssignIpv6Addresses"
)

type PostAssignIpv6AddressesVersionEnum string

const (
	PostAssignIpv6AddressesVersionEnumTwoThousandAndSixteen1115 PostAssignIpv6AddressesVersionEnum = "2016-11-15"
)

type PostAssignIpv6AddressesQueryParams struct {
	Action  PostAssignIpv6AddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssignIpv6AddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssignIpv6AddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssignIpv6AddressesRequest struct {
	QueryParams PostAssignIpv6AddressesQueryParams
	Headers     PostAssignIpv6AddressesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssignIpv6AddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
