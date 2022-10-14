package shared

type KeyValuePair struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
