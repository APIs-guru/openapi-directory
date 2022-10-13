package shared

type ConnectionQueryStringParameter struct {
	IsValueSecret *bool   `json:"IsValueSecret"`
	Key           *string `json:"Key"`
	Value         *string `json:"Value"`
}
