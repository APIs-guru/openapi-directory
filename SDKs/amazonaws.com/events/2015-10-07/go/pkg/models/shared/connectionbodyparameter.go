package shared

type ConnectionBodyParameter struct {
	IsValueSecret *bool   `json:"IsValueSecret"`
	Key           *string `json:"Key"`
	Value         *string `json:"Value"`
}
