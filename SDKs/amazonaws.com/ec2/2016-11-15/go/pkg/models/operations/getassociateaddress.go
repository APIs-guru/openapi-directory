package operations

type GetAssociateAddressActionEnum string

const (
	GetAssociateAddressActionEnumAssociateAddress GetAssociateAddressActionEnum = "AssociateAddress"
)

type GetAssociateAddressVersionEnum string

const (
	GetAssociateAddressVersionEnumTwoThousandAndSixteen1115 GetAssociateAddressVersionEnum = "2016-11-15"
)

type GetAssociateAddressQueryParams struct {
	Action             GetAssociateAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllocationID       *string                        `queryParam:"style=form,explode=true,name=AllocationId"`
	AllowReassociation *bool                          `queryParam:"style=form,explode=true,name=AllowReassociation"`
	DryRun             *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID         *string                        `queryParam:"style=form,explode=true,name=InstanceId"`
	NetworkInterfaceID *string                        `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	PrivateIPAddress   *string                        `queryParam:"style=form,explode=true,name=PrivateIpAddress"`
	PublicIP           *string                        `queryParam:"style=form,explode=true,name=PublicIp"`
	Version            GetAssociateAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateAddressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssociateAddressRequest struct {
	QueryParams GetAssociateAddressQueryParams
	Headers     GetAssociateAddressHeaders
}

type GetAssociateAddressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
