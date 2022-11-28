package shared

// S3Origin
// A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
type S3Origin struct {
	DomainName           string
	OriginAccessIdentity string
}
