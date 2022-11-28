package shared

// Origin
// <p>A complex type that describes the Amazon S3 bucket or the HTTP server (for example, a web server) from which CloudFront gets your files. You must create at least one origin.</p> <p>For the current limit on the number of origins that you can create for a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
type Origin struct {
	CustomHeaders      *CustomHeaders
	CustomOriginConfig *CustomOriginConfig
	DomainName         string
	ID                 string
	OriginPath         *string
	S3OriginConfig     *S3OriginConfig
}
