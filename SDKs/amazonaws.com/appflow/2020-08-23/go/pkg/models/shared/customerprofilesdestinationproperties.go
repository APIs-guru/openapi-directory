package shared

type CustomerProfilesDestinationProperties struct {
	DomainName     string  `json:"domainName"`
	ObjectTypeName *string `json:"objectTypeName,omitempty"`
}
