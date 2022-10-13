package shared

type InvalidInputProperty struct {
	InvalidValue *string `json:"invalidValue"`
	Message      *string `json:"message"`
	PropertyPath string  `json:"propertyPath"`
}
