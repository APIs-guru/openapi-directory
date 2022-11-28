package shared

// KeyPair
// Describes a key pair.
type KeyPair struct {
	KeyFingerprint *string
	KeyMaterial    *string
	KeyName        *string
	KeyPairID      *string
	Tags           []Tag
}
