package shared

// LambdaActivity
// An activity that runs a Lambda function to modify the message.
type LambdaActivity struct {
	BatchSize  int64   `json:"batchSize"`
	LambdaName string  `json:"lambdaName"`
	Name       string  `json:"name"`
	Next       *string `json:"next,omitempty"`
}
