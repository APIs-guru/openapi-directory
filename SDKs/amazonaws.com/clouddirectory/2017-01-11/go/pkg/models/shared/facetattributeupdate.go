package shared

type FacetAttributeUpdate struct {
	Action    *UpdateActionTypeEnum `json:"Action"`
	Attribute *FacetAttribute       `json:"Attribute"`
}
