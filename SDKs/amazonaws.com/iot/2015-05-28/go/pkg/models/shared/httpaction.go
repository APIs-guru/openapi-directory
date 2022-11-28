package shared

// HTTPAction
// Send data to an HTTPS endpoint.
type HTTPAction struct {
	Auth            *HTTPAuthorization `json:"auth,omitempty"`
	ConfirmationURL *string            `json:"confirmationUrl,omitempty"`
	Headers         []HTTPActionHeader `json:"headers,omitempty"`
	URL             string             `json:"url"`
}
