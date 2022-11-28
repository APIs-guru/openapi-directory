package shared

// Attribute
// This data type is used in the <a>ImageScanFinding</a> data type.
type Attribute struct {
	Key   string  `json:"key"`
	Value *string `json:"value,omitempty"`
}
