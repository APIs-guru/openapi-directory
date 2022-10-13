package shared

type GeneralName struct {
	DirectoryName             *Asn1Subject  `json:"DirectoryName"`
	DNSName                   *string       `json:"DnsName"`
	EdiPartyName              *EdiPartyName `json:"EdiPartyName"`
	IPAddress                 *string       `json:"IpAddress"`
	OtherName                 *OtherName    `json:"OtherName"`
	RegisteredID              *string       `json:"RegisteredId"`
	Rfc822Name                *string       `json:"Rfc822Name"`
	UniformResourceIdentifier *string       `json:"UniformResourceIdentifier"`
}
