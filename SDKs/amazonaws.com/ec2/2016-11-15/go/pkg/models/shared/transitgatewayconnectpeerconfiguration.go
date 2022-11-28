package shared

// TransitGatewayConnectPeerConfiguration
// Describes the Connect peer details.
type TransitGatewayConnectPeerConfiguration struct {
	BgpConfigurations     []TransitGatewayAttachmentBgpConfiguration
	InsideCidrBlocks      []string
	PeerAddress           *string
	Protocol              *ProtocolValueEnum
	TransitGatewayAddress *string
}
