package shared

// PublicKeyList
// A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
type PublicKeyList struct {
	Items      []PublicKeySummary
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
