package shared

// LambdaAction
// Describes an action to invoke a Lambda function.
type LambdaAction struct {
	FunctionArn string `json:"functionArn"`
}
