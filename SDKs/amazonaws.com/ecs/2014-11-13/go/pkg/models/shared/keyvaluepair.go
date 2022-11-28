package shared

// KeyValuePair
// A key-value pair object.
type KeyValuePair struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
