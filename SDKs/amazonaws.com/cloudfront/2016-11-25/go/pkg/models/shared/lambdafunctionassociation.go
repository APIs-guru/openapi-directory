package shared

// LambdaFunctionAssociation
// A complex type that contains a Lambda function association.
type LambdaFunctionAssociation struct {
	EventType         *EventTypeEnum
	LambdaFunctionArn *string
}
