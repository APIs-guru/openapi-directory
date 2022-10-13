package shared

type DmsSslModeValueEnum string

const (
	DmsSslModeValueEnumNone       DmsSslModeValueEnum = "none"
	DmsSslModeValueEnumRequire    DmsSslModeValueEnum = "require"
	DmsSslModeValueEnumVerifyCa   DmsSslModeValueEnum = "verify-ca"
	DmsSslModeValueEnumVerifyFull DmsSslModeValueEnum = "verify-full"
)
