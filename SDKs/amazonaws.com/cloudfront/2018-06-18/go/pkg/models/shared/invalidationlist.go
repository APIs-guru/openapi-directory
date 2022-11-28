package shared

// InvalidationList
// The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
type InvalidationList struct {
	IsTruncated bool
	Items       []InvalidationSummary
	Marker      string
	MaxItems    int64
	NextMarker  *string
	Quantity    int64
}
