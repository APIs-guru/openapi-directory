package shared

// ConnectionQueryStringParameter
// Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
type ConnectionQueryStringParameter struct {
	IsValueSecret *bool   `json:"IsValueSecret,omitempty"`
	Key           *string `json:"Key,omitempty"`
	Value         *string `json:"Value,omitempty"`
}
