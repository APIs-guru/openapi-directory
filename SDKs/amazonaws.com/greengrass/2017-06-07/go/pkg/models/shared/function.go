package shared

// Function
// Information about a Lambda function.
type Function struct {
	FunctionArn           *string                `json:"FunctionArn,omitempty"`
	FunctionConfiguration *FunctionConfiguration `json:"FunctionConfiguration,omitempty"`
	ID                    string                 `json:"Id"`
}
