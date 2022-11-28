package shared

// NewBgpPeer
// Information about a new BGP peer.
type NewBgpPeer struct {
	AddressFamily   *AddressFamilyEnum `json:"addressFamily,omitempty"`
	AmazonAddress   *string            `json:"amazonAddress,omitempty"`
	Asn             *int64             `json:"asn,omitempty"`
	AuthKey         *string            `json:"authKey,omitempty"`
	CustomerAddress *string            `json:"customerAddress,omitempty"`
}
