package shared

// Signer
// A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.
type Signer struct {
	AwsAccountNumber *string
	KeyPairIds       *KeyPairIds
}
