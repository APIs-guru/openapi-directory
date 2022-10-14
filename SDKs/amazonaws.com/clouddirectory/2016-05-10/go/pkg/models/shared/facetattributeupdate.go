package shared

type FacetAttributeUpdate struct {
	Action    *UpdateActionTypeEnum `json:"Action,omitempty"`
	Attribute *FacetAttribute       `json:"Attribute,omitempty"`
}
