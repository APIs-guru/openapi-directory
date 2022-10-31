package shared

type PatchOperation struct {
	From  *string `json:"from,omitempty"`
	Op    *OpEnum `json:"op,omitempty"`
	Path  *string `json:"path,omitempty"`
	Value *string `json:"value,omitempty"`
}
