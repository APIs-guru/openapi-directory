package operations

type GetAssignPrivateIPAddressesActionEnum string

const (
	GetAssignPrivateIPAddressesActionEnumAssignPrivateIPAddresses GetAssignPrivateIPAddressesActionEnum = "AssignPrivateIpAddresses"
)

type GetAssignPrivateIPAddressesVersionEnum string

const (
	GetAssignPrivateIPAddressesVersionEnumTwoThousandAndSixteen1115 GetAssignPrivateIPAddressesVersionEnum = "2016-11-15"
)

type GetAssignPrivateIPAddressesQueryParams struct {
	Action                         GetAssignPrivateIPAddressesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllowReassignment              *bool                                  `queryParam:"style=form,explode=true,name=AllowReassignment"`
	Ipv4Prefix                     []string                               `queryParam:"style=form,explode=true,name=Ipv4Prefix"`
	Ipv4PrefixCount                *int64                                 `queryParam:"style=form,explode=true,name=Ipv4PrefixCount"`
	NetworkInterfaceID             string                                 `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	PrivateIPAddress               []string                               `queryParam:"style=form,explode=true,name=PrivateIpAddress"`
	SecondaryPrivateIPAddressCount *int64                                 `queryParam:"style=form,explode=true,name=SecondaryPrivateIpAddressCount"`
	Version                        GetAssignPrivateIPAddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssignPrivateIPAddressesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssignPrivateIPAddressesRequest struct {
	QueryParams GetAssignPrivateIPAddressesQueryParams
	Headers     GetAssignPrivateIPAddressesHeaders
}

type GetAssignPrivateIPAddressesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
