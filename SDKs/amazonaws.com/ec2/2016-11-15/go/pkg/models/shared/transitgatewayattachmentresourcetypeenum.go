package shared

type TransitGatewayAttachmentResourceTypeEnum string

const (
	TransitGatewayAttachmentResourceTypeEnumVpc                  TransitGatewayAttachmentResourceTypeEnum = "vpc"
	TransitGatewayAttachmentResourceTypeEnumVpn                  TransitGatewayAttachmentResourceTypeEnum = "vpn"
	TransitGatewayAttachmentResourceTypeEnumDirectConnectGateway TransitGatewayAttachmentResourceTypeEnum = "direct-connect-gateway"
	TransitGatewayAttachmentResourceTypeEnumConnect              TransitGatewayAttachmentResourceTypeEnum = "connect"
	TransitGatewayAttachmentResourceTypeEnumPeering              TransitGatewayAttachmentResourceTypeEnum = "peering"
	TransitGatewayAttachmentResourceTypeEnumTgwPeering           TransitGatewayAttachmentResourceTypeEnum = "tgw-peering"
)
