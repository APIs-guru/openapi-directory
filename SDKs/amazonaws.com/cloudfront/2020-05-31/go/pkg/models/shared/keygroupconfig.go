package shared

// KeyGroupConfig
// <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
type KeyGroupConfig struct {
	Comment *string
	Items   []string
	Name    string
}
