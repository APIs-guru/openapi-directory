package shared

// ResourceGroupTag
// This data type is used as one of the elements of the <a>ResourceGroup</a> data type.
type ResourceGroupTag struct {
	Key   string  `json:"key"`
	Value *string `json:"value,omitempty"`
}
