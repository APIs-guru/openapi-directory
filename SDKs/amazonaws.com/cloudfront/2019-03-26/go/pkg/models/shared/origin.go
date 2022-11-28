package shared

// Origin
// <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use the <code>S3OriginConfig</code> type to specify an Amazon S3 bucket that is <i> <b>not</b> </i> configured with static website hosting.</p> </li> <li> <p>Use the <code>CustomOriginConfig</code> type to specify various other kinds of content containers or HTTP servers, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage origin</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
type Origin struct {
	ConnectionAttempts *int64
	ConnectionTimeout  *int64
	CustomHeaders      *CustomHeaders
	CustomOriginConfig *CustomOriginConfig
	DomainName         string
	ID                 string
	OriginPath         *string
	S3OriginConfig     *S3OriginConfig
}
