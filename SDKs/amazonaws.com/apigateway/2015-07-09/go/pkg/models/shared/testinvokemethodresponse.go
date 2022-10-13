package shared

type TestInvokeMethodResponse struct {
	Body              *string             `json:"body"`
	Headers           map[string]string   `json:"headers"`
	Latency           *int64              `json:"latency"`
	Log               *string             `json:"log"`
	MultiValueHeaders map[string][]string `json:"multiValueHeaders"`
	Status            *int64              `json:"status"`
}
