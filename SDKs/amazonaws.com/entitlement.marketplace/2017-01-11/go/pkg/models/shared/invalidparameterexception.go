package shared

type InvalidParameterException struct {
	Message *string `json:"message,omitempty"`
}
