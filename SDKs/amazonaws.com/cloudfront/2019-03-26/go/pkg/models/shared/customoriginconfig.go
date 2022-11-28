package shared

// CustomOriginConfig
// A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.
type CustomOriginConfig struct {
	HTTPPort               int64
	HTTPSPort              int64
	OriginKeepaliveTimeout *int64
	OriginProtocolPolicy   OriginProtocolPolicyEnum
	OriginReadTimeout      *int64
	OriginSslProtocols     *OriginSslProtocols
}
