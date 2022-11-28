package shared

// KgKeyPairIds
// A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
type KgKeyPairIds struct {
	KeyGroupID *string
	KeyPairIds *KeyPairIds
}
