package shared

// TestInvokeMethodResponse
// <p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div>
type TestInvokeMethodResponse struct {
	Body              *string             `json:"body,omitempty"`
	Headers           map[string]string   `json:"headers,omitempty"`
	Latency           *int64              `json:"latency,omitempty"`
	Log               *string             `json:"log,omitempty"`
	MultiValueHeaders map[string][]string `json:"multiValueHeaders,omitempty"`
	Status            *int64              `json:"status,omitempty"`
}
