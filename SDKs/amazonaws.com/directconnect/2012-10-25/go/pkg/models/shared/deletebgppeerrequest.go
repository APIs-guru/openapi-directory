package shared

type DeleteBgpPeerRequest struct {
	Asn                *int64  `json:"asn"`
	BgpPeerID          *string `json:"bgpPeerId"`
	CustomerAddress    *string `json:"customerAddress"`
	VirtualInterfaceID *string `json:"virtualInterfaceId"`
}
