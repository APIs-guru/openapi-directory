package shared

type BgpPeer struct {
	AddressFamily      *AddressFamilyEnum `json:"addressFamily"`
	AmazonAddress      *string            `json:"amazonAddress"`
	Asn                *int64             `json:"asn"`
	AuthKey            *string            `json:"authKey"`
	AwsDeviceV2        *string            `json:"awsDeviceV2"`
	AwsLogicalDeviceID *string            `json:"awsLogicalDeviceId"`
	BgpPeerID          *string            `json:"bgpPeerId"`
	BgpPeerState       *BgpPeerStateEnum  `json:"bgpPeerState"`
	BgpStatus          *BgpStatusEnum     `json:"bgpStatus"`
	CustomerAddress    *string            `json:"customerAddress"`
}
