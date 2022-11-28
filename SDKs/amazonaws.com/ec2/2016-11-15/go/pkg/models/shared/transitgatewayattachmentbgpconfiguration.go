package shared

// TransitGatewayAttachmentBgpConfiguration
// The BGP configuration information.
type TransitGatewayAttachmentBgpConfiguration struct {
	BgpStatus             *BgpStatusEnum
	PeerAddress           *string
	PeerAsn               *int64
	TransitGatewayAddress *string
	TransitGatewayAsn     *int64
}
