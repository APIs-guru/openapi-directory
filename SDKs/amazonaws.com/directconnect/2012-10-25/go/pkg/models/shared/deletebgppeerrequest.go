package shared

type DeleteBgpPeerRequest struct {
	Asn                *int64  `json:"asn,omitempty"`
	BgpPeerID          *string `json:"bgpPeerId,omitempty"`
	CustomerAddress    *string `json:"customerAddress,omitempty"`
	VirtualInterfaceID *string `json:"virtualInterfaceId,omitempty"`
}
