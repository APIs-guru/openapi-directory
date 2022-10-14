package shared

type AttributeType struct {
	Name  string  `json:"Name"`
	Value *string `json:"Value,omitempty"`
}
