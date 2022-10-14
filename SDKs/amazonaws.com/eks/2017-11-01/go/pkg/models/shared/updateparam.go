package shared

type UpdateParam struct {
	Type  *UpdateParamTypeEnum `json:"type,omitempty"`
	Value *string              `json:"value,omitempty"`
}
