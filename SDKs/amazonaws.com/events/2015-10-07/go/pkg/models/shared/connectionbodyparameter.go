package shared

// ConnectionBodyParameter
// Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.
type ConnectionBodyParameter struct {
	IsValueSecret *bool   `json:"IsValueSecret,omitempty"`
	Key           *string `json:"Key,omitempty"`
	Value         *string `json:"Value,omitempty"`
}
