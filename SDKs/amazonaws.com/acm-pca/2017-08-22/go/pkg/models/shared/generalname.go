package shared

// GeneralName
// Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
type GeneralName struct {
	DirectoryName             *Asn1Subject  `json:"DirectoryName,omitempty"`
	DNSName                   *string       `json:"DnsName,omitempty"`
	EdiPartyName              *EdiPartyName `json:"EdiPartyName,omitempty"`
	IPAddress                 *string       `json:"IpAddress,omitempty"`
	OtherName                 *OtherName    `json:"OtherName,omitempty"`
	RegisteredID              *string       `json:"RegisteredId,omitempty"`
	Rfc822Name                *string       `json:"Rfc822Name,omitempty"`
	UniformResourceIdentifier *string       `json:"UniformResourceIdentifier,omitempty"`
}
