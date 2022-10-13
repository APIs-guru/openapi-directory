package operations

type GetRegisterTransitGatewayMulticastGroupMembersActionEnum string

const (
	GetRegisterTransitGatewayMulticastGroupMembersActionEnumRegisterTransitGatewayMulticastGroupMembers GetRegisterTransitGatewayMulticastGroupMembersActionEnum = "RegisterTransitGatewayMulticastGroupMembers"
)

type GetRegisterTransitGatewayMulticastGroupMembersVersionEnum string

const (
	GetRegisterTransitGatewayMulticastGroupMembersVersionEnumTwoThousandAndSixteen1115 GetRegisterTransitGatewayMulticastGroupMembersVersionEnum = "2016-11-15"
)

type GetRegisterTransitGatewayMulticastGroupMembersQueryParams struct {
	Action                          GetRegisterTransitGatewayMulticastGroupMembersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                          *bool                                                     `queryParam:"style=form,explode=true,name=DryRun"`
	GroupIPAddress                  *string                                                   `queryParam:"style=form,explode=true,name=GroupIpAddress"`
	NetworkInterfaceIds             []string                                                  `queryParam:"style=form,explode=true,name=NetworkInterfaceIds"`
	TransitGatewayMulticastDomainID *string                                                   `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
	Version                         GetRegisterTransitGatewayMulticastGroupMembersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRegisterTransitGatewayMulticastGroupMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRegisterTransitGatewayMulticastGroupMembersRequest struct {
	QueryParams GetRegisterTransitGatewayMulticastGroupMembersQueryParams
	Headers     GetRegisterTransitGatewayMulticastGroupMembersHeaders
}

type GetRegisterTransitGatewayMulticastGroupMembersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
