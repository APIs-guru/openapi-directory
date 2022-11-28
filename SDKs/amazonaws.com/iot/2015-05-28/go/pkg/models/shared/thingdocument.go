package shared

// ThingDocument
// The thing search index document.
type ThingDocument struct {
	Attributes      map[string]string  `json:"attributes,omitempty"`
	Connectivity    *ThingConnectivity `json:"connectivity,omitempty"`
	Shadow          *string            `json:"shadow,omitempty"`
	ThingGroupNames []string           `json:"thingGroupNames,omitempty"`
	ThingID         *string            `json:"thingId,omitempty"`
	ThingName       *string            `json:"thingName,omitempty"`
	ThingTypeName   *string            `json:"thingTypeName,omitempty"`
}
