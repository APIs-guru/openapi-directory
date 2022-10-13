package shared

type HTTPAction struct {
	Auth            *HTTPAuthorization `json:"auth"`
	ConfirmationURL *string            `json:"confirmationUrl"`
	Headers         []HTTPActionHeader `json:"headers"`
	URL             string             `json:"url"`
}
