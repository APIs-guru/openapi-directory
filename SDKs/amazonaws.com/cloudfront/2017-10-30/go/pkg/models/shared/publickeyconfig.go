package shared

// PublicKeyConfig
// Information about a public key you add to CloudFront to use with features like field-level encryption.
type PublicKeyConfig struct {
	CallerReference string
	Comment         *string
	EncodedKey      string
	Name            string
}
