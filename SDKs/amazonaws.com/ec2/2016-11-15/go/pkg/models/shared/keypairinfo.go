package shared

// KeyPairInfo
// Describes a key pair.
type KeyPairInfo struct {
	KeyFingerprint *string
	KeyName        *string
	KeyPairID      *string
	KeyType        *KeyTypeEnum
	Tags           []Tag
}
