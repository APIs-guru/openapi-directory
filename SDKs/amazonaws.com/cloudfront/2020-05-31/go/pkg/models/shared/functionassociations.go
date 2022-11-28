package shared

// FunctionAssociations
// A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
type FunctionAssociations struct {
	Items    []FunctionAssociation
	Quantity int64
}
