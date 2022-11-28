package shared

// Asn1Subject
// Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
type Asn1Subject struct {
	CommonName                 *string `json:"CommonName,omitempty"`
	Country                    *string `json:"Country,omitempty"`
	DistinguishedNameQualifier *string `json:"DistinguishedNameQualifier,omitempty"`
	GenerationQualifier        *string `json:"GenerationQualifier,omitempty"`
	GivenName                  *string `json:"GivenName,omitempty"`
	Initials                   *string `json:"Initials,omitempty"`
	Locality                   *string `json:"Locality,omitempty"`
	Organization               *string `json:"Organization,omitempty"`
	OrganizationalUnit         *string `json:"OrganizationalUnit,omitempty"`
	Pseudonym                  *string `json:"Pseudonym,omitempty"`
	SerialNumber               *string `json:"SerialNumber,omitempty"`
	State                      *string `json:"State,omitempty"`
	Surname                    *string `json:"Surname,omitempty"`
	Title                      *string `json:"Title,omitempty"`
}
