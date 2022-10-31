package operations

type GetUnassignPrivateIPAddressesActionEnum string

const (
	GetUnassignPrivateIPAddressesActionEnumUnassignPrivateIPAddresses GetUnassignPrivateIPAddressesActionEnum = "UnassignPrivateIpAddresses"
)

type GetUnassignPrivateIPAddressesVersionEnum string

const (
	GetUnassignPrivateIPAddressesVersionEnumTwoThousandAndSixteen1115 GetUnassignPrivateIPAddressesVersionEnum = "2016-11-15"
)

type GetUnassignPrivateIPAddressesQueryParams struct {
	Action             GetUnassignPrivateIPAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Ipv4Prefix         []string                                 `queryParam:"style=form,explode=true,name=Ipv4Prefix"`
	NetworkInterfaceID string                                   `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	PrivateIPAddress   []string                                 `queryParam:"style=form,explode=true,name=PrivateIpAddress"`
	Version            GetUnassignPrivateIPAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUnassignPrivateIPAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUnassignPrivateIPAddressesRequest struct {
	QueryParams GetUnassignPrivateIPAddressesQueryParams
	Headers     GetUnassignPrivateIPAddressesHeaders
}

type GetUnassignPrivateIPAddressesResponse struct {
	ContentType string
	StatusCode  int64
}
