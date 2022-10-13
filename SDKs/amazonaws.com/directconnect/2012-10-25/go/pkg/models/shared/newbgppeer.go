package shared

type NewBgpPeer struct {
	AddressFamily   *AddressFamilyEnum `json:"addressFamily"`
	AmazonAddress   *string            `json:"amazonAddress"`
	Asn             *int64             `json:"asn"`
	AuthKey         *string            `json:"authKey"`
	CustomerAddress *string            `json:"customerAddress"`
}
