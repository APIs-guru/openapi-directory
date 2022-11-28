package shared

// KeyPairIds
// <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
type KeyPairIds struct {
	Items    []string
	Quantity int64
}
