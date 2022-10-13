package shared

type UpdateParam struct {
	Type  *UpdateParamTypeEnum `json:"type"`
	Value *string              `json:"value"`
}
