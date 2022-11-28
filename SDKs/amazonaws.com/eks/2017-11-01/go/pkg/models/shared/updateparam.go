package shared

// UpdateParam
// An object representing the details of an update request.
type UpdateParam struct {
	Type  *UpdateParamTypeEnum `json:"type,omitempty"`
	Value *string              `json:"value,omitempty"`
}
