package shared

// EdiPartyName
// Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://tools.ietf.org/html/rfc5280">Subject Alternative Name</a> in RFC 5280.
type EdiPartyName struct {
	NameAssigner *string `json:"NameAssigner,omitempty"`
	PartyName    string  `json:"PartyName"`
}
