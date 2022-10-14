package shared

type TestInvokeMethodResponse struct {
	Body              *string             `json:"body,omitempty"`
	Headers           map[string]string   `json:"headers,omitempty"`
	Latency           *int64              `json:"latency,omitempty"`
	Log               *string             `json:"log,omitempty"`
	MultiValueHeaders map[string][]string `json:"multiValueHeaders,omitempty"`
	Status            *int64              `json:"status,omitempty"`
}
