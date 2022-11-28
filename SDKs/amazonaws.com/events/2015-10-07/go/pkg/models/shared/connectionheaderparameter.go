package shared

// ConnectionHeaderParameter
// Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.
type ConnectionHeaderParameter struct {
	IsValueSecret *bool   `json:"IsValueSecret,omitempty"`
	Key           *string `json:"Key,omitempty"`
	Value         *string `json:"Value,omitempty"`
}
