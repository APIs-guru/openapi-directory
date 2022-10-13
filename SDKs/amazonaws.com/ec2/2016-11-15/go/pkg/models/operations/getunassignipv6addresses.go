package operations

type GetUnassignIpv6AddressesActionEnum string

const (
	GetUnassignIpv6AddressesActionEnumUnassignIpv6Addresses GetUnassignIpv6AddressesActionEnum = "UnassignIpv6Addresses"
)

type GetUnassignIpv6AddressesVersionEnum string

const (
	GetUnassignIpv6AddressesVersionEnumTwoThousandAndSixteen1115 GetUnassignIpv6AddressesVersionEnum = "2016-11-15"
)

type GetUnassignIpv6AddressesQueryParams struct {
	Action             GetUnassignIpv6AddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Ipv6Addresses      []string                            `queryParam:"style=form,explode=true,name=Ipv6Addresses"`
	Ipv6Prefix         []string                            `queryParam:"style=form,explode=true,name=Ipv6Prefix"`
	NetworkInterfaceID string                              `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	Version            GetUnassignIpv6AddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUnassignIpv6AddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUnassignIpv6AddressesRequest struct {
	QueryParams GetUnassignIpv6AddressesQueryParams
	Headers     GetUnassignIpv6AddressesHeaders
}

type GetUnassignIpv6AddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
