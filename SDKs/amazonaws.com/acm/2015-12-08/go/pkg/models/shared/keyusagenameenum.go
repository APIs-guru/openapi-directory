package shared

type KeyUsageNameEnum string

const (
	KeyUsageNameEnumDigitalSignature   KeyUsageNameEnum = "DIGITAL_SIGNATURE"
	KeyUsageNameEnumNonRepudiation     KeyUsageNameEnum = "NON_REPUDIATION"
	KeyUsageNameEnumKeyEncipherment    KeyUsageNameEnum = "KEY_ENCIPHERMENT"
	KeyUsageNameEnumDataEncipherment   KeyUsageNameEnum = "DATA_ENCIPHERMENT"
	KeyUsageNameEnumKeyAgreement       KeyUsageNameEnum = "KEY_AGREEMENT"
	KeyUsageNameEnumCertificateSigning KeyUsageNameEnum = "CERTIFICATE_SIGNING"
	KeyUsageNameEnumCrlSigning         KeyUsageNameEnum = "CRL_SIGNING"
	KeyUsageNameEnumEncipherOnly       KeyUsageNameEnum = "ENCIPHER_ONLY"
	KeyUsageNameEnumDecipherOnly       KeyUsageNameEnum = "DECIPHER_ONLY"
	KeyUsageNameEnumAny                KeyUsageNameEnum = "ANY"
	KeyUsageNameEnumCustom             KeyUsageNameEnum = "CUSTOM"
)
