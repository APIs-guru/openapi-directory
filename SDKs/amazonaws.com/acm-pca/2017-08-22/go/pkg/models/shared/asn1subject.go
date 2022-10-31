package shared



type Asn1Subject struct {
    CommonName *string `json:"CommonName,omitempty"`
    Country *string `json:"Country,omitempty"`
    DistinguishedNameQualifier *string `json:"DistinguishedNameQualifier,omitempty"`
    GenerationQualifier *string `json:"GenerationQualifier,omitempty"`
    GivenName *string `json:"GivenName,omitempty"`
    Initials *string `json:"Initials,omitempty"`
    Locality *string `json:"Locality,omitempty"`
    Organization *string `json:"Organization,omitempty"`
    OrganizationalUnit *string `json:"OrganizationalUnit,omitempty"`
    Pseudonym *string `json:"Pseudonym,omitempty"`
    SerialNumber *string `json:"SerialNumber,omitempty"`
    State *string `json:"State,omitempty"`
    Surname *string `json:"Surname,omitempty"`
    Title *string `json:"Title,omitempty"`
    
}

