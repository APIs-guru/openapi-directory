package shared



type GeneralName struct {
    DirectoryName *Asn1Subject `json:"DirectoryName,omitempty"`
    DNSName *string `json:"DnsName,omitempty"`
    EdiPartyName *EdiPartyName `json:"EdiPartyName,omitempty"`
    IPAddress *string `json:"IpAddress,omitempty"`
    OtherName *OtherName `json:"OtherName,omitempty"`
    RegisteredID *string `json:"RegisteredId,omitempty"`
    Rfc822Name *string `json:"Rfc822Name,omitempty"`
    UniformResourceIdentifier *string `json:"UniformResourceIdentifier,omitempty"`
    
}

