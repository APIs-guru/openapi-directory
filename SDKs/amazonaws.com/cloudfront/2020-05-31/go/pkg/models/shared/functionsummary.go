package shared

// FunctionSummary
// Contains configuration information and metadata about a CloudFront function.
type FunctionSummary struct {
	FunctionConfig   FunctionConfig
	FunctionMetadata FunctionMetadata
	Name             string
	Status           *string
}
