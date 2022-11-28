package shared

// LambdaFunctionAssociation
// A complex type that contains a Lambda@Edge function association.
type LambdaFunctionAssociation struct {
	EventType         EventTypeEnum
	IncludeBody       *bool
	LambdaFunctionArn string
}
