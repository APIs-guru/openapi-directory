package shared

// ThingGroupDocument
// The thing group search index document.
type ThingGroupDocument struct {
	Attributes            map[string]string `json:"attributes,omitempty"`
	ParentGroupNames      []string          `json:"parentGroupNames,omitempty"`
	ThingGroupDescription *string           `json:"thingGroupDescription,omitempty"`
	ThingGroupID          *string           `json:"thingGroupId,omitempty"`
	ThingGroupName        *string           `json:"thingGroupName,omitempty"`
}
