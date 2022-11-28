package shared

// FacetAttributeUpdate
// A structure that contains information used to update an attribute.
type FacetAttributeUpdate struct {
	Action    *UpdateActionTypeEnum `json:"Action,omitempty"`
	Attribute *FacetAttribute       `json:"Attribute,omitempty"`
}
