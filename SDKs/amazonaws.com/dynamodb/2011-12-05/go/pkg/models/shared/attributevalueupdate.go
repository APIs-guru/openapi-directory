package shared

type AttributeValueUpdate struct {
	Action *AttributeActionEnum `json:"Action"`
	Value  *AttributeValue      `json:"Value"`
}
