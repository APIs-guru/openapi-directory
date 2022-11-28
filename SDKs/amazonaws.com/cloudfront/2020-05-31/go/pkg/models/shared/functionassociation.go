package shared

// FunctionAssociation
// A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
type FunctionAssociation struct {
	EventType   EventTypeEnum
	FunctionArn string
}
