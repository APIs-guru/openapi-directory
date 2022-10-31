package shared

type AttributeValueUpdate struct {
	Action *AttributeActionEnum `json:"Action,omitempty"`
	Value  *AttributeValue      `json:"Value,omitempty"`
}
