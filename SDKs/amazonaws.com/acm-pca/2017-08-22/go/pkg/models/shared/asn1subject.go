package shared

type Asn1Subject struct {
	CommonName                 *string `json:"CommonName"`
	Country                    *string `json:"Country"`
	DistinguishedNameQualifier *string `json:"DistinguishedNameQualifier"`
	GenerationQualifier        *string `json:"GenerationQualifier"`
	GivenName                  *string `json:"GivenName"`
	Initials                   *string `json:"Initials"`
	Locality                   *string `json:"Locality"`
	Organization               *string `json:"Organization"`
	OrganizationalUnit         *string `json:"OrganizationalUnit"`
	Pseudonym                  *string `json:"Pseudonym"`
	SerialNumber               *string `json:"SerialNumber"`
	State                      *string `json:"State"`
	Surname                    *string `json:"Surname"`
	Title                      *string `json:"Title"`
}
