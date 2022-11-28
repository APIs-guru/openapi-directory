package shared

// LambdaAction
// Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
type LambdaAction struct {
	FunctionArn string   `json:"functionArn"`
	Payload     *Payload `json:"payload,omitempty"`
}
