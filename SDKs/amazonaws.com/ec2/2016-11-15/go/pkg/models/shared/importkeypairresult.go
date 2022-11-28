package shared

type ImportKeyPairResult struct {
	KeyFingerprint *string
	KeyName        *string
	KeyPairID      *string
	Tags           []Tag
}
