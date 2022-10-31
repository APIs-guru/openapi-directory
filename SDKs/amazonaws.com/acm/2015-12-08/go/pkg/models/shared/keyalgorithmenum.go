package shared




type KeyAlgorithmEnum string

const (
    KeyAlgorithmEnumRsa1024 KeyAlgorithmEnum = "RSA_1024"
KeyAlgorithmEnumRsa2048 KeyAlgorithmEnum = "RSA_2048"
KeyAlgorithmEnumRsa3072 KeyAlgorithmEnum = "RSA_3072"
KeyAlgorithmEnumRsa4096 KeyAlgorithmEnum = "RSA_4096"
KeyAlgorithmEnumEcPrime256v1 KeyAlgorithmEnum = "EC_prime256v1"
KeyAlgorithmEnumEcSecp384r1 KeyAlgorithmEnum = "EC_secp384r1"
KeyAlgorithmEnumEcSecp521r1 KeyAlgorithmEnum = "EC_secp521r1"
)


