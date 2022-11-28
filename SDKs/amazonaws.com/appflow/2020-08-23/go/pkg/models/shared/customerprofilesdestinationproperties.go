package shared

// CustomerProfilesDestinationProperties
//
//	The properties that are applied when Amazon Connect Customer Profiles is used as a destination.
type CustomerProfilesDestinationProperties struct {
	DomainName     string  `json:"domainName"`
	ObjectTypeName *string `json:"objectTypeName,omitempty"`
}
