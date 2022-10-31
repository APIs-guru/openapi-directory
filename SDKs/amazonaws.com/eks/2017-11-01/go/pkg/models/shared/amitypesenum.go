package shared

type AmiTypesEnum string

const (
	AmiTypesEnumAl2X8664    AmiTypesEnum = "AL2_x86_64"
	AmiTypesEnumAl2X8664Gpu AmiTypesEnum = "AL2_x86_64_GPU"
	AmiTypesEnumAl2Arm64    AmiTypesEnum = "AL2_ARM_64"
	AmiTypesEnumCustom      AmiTypesEnum = "CUSTOM"
)
