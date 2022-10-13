package shared

type ExtendedKeyUsageTypeEnum string

const (
	ExtendedKeyUsageTypeEnumServerAuth              ExtendedKeyUsageTypeEnum = "SERVER_AUTH"
	ExtendedKeyUsageTypeEnumClientAuth              ExtendedKeyUsageTypeEnum = "CLIENT_AUTH"
	ExtendedKeyUsageTypeEnumCodeSigning             ExtendedKeyUsageTypeEnum = "CODE_SIGNING"
	ExtendedKeyUsageTypeEnumEmailProtection         ExtendedKeyUsageTypeEnum = "EMAIL_PROTECTION"
	ExtendedKeyUsageTypeEnumTimeStamping            ExtendedKeyUsageTypeEnum = "TIME_STAMPING"
	ExtendedKeyUsageTypeEnumOcspSigning             ExtendedKeyUsageTypeEnum = "OCSP_SIGNING"
	ExtendedKeyUsageTypeEnumSmartCardLogin          ExtendedKeyUsageTypeEnum = "SMART_CARD_LOGIN"
	ExtendedKeyUsageTypeEnumDocumentSigning         ExtendedKeyUsageTypeEnum = "DOCUMENT_SIGNING"
	ExtendedKeyUsageTypeEnumCertificateTransparency ExtendedKeyUsageTypeEnum = "CERTIFICATE_TRANSPARENCY"
)
