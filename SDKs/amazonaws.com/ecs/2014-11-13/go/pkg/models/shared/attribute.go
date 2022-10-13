package shared

type Attribute struct {
	Name       string          `json:"name"`
	TargetID   *string         `json:"targetId"`
	TargetType *TargetTypeEnum `json:"targetType"`
	Value      *string         `json:"value"`
}
