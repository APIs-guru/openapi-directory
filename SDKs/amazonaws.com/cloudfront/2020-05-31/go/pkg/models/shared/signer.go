package shared

// Signer
// A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
type Signer struct {
	AwsAccountNumber *string
	KeyPairIds       *KeyPairIds
}
