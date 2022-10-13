package shared

type KeyAlgorithmEnum string

const (
	KeyAlgorithmEnumRsa2048      KeyAlgorithmEnum = "RSA_2048"
	KeyAlgorithmEnumRsa4096      KeyAlgorithmEnum = "RSA_4096"
	KeyAlgorithmEnumEcPrime256v1 KeyAlgorithmEnum = "EC_prime256v1"
	KeyAlgorithmEnumEcSecp384r1  KeyAlgorithmEnum = "EC_secp384r1"
)
