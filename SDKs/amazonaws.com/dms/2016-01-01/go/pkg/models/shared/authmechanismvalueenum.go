package shared

type AuthMechanismValueEnum string

const (
	AuthMechanismValueEnumDefault   AuthMechanismValueEnum = "default"
	AuthMechanismValueEnumMongodbCr AuthMechanismValueEnum = "mongodb_cr"
	AuthMechanismValueEnumScramSha1 AuthMechanismValueEnum = "scram_sha_1"
)
