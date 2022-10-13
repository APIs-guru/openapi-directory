package shared

type Function struct {
	FunctionArn           *string                `json:"FunctionArn"`
	FunctionConfiguration *FunctionConfiguration `json:"FunctionConfiguration"`
	ID                    string                 `json:"Id"`
}
