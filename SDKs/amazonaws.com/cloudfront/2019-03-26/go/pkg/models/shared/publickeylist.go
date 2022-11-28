package shared

// PublicKeyList
// A list of public keys you've added to CloudFront to use with features like field-level encryption.
type PublicKeyList struct {
	Items      []PublicKeySummary
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
