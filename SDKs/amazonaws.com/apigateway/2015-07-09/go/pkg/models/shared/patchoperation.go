package shared

// PatchOperation
// A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
type PatchOperation struct {
	From  *string `json:"from,omitempty"`
	Op    *OpEnum `json:"op,omitempty"`
	Path  *string `json:"path,omitempty"`
	Value *string `json:"value,omitempty"`
}
