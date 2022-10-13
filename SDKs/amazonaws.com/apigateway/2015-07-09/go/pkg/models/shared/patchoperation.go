package shared

type PatchOperation struct {
	From  *string `json:"from"`
	Op    *OpEnum `json:"op"`
	Path  *string `json:"path"`
	Value *string `json:"value"`
}
