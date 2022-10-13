package shared

type ExtendedKeyUsageNameEnum string

const (
	ExtendedKeyUsageNameEnumTLSWebServerAuthentication ExtendedKeyUsageNameEnum = "TLS_WEB_SERVER_AUTHENTICATION"
	ExtendedKeyUsageNameEnumTLSWebClientAuthentication ExtendedKeyUsageNameEnum = "TLS_WEB_CLIENT_AUTHENTICATION"
	ExtendedKeyUsageNameEnumCodeSigning                ExtendedKeyUsageNameEnum = "CODE_SIGNING"
	ExtendedKeyUsageNameEnumEmailProtection            ExtendedKeyUsageNameEnum = "EMAIL_PROTECTION"
	ExtendedKeyUsageNameEnumTimeStamping               ExtendedKeyUsageNameEnum = "TIME_STAMPING"
	ExtendedKeyUsageNameEnumOcspSigning                ExtendedKeyUsageNameEnum = "OCSP_SIGNING"
	ExtendedKeyUsageNameEnumIpsecEndSystem             ExtendedKeyUsageNameEnum = "IPSEC_END_SYSTEM"
	ExtendedKeyUsageNameEnumIpsecTunnel                ExtendedKeyUsageNameEnum = "IPSEC_TUNNEL"
	ExtendedKeyUsageNameEnumIpsecUser                  ExtendedKeyUsageNameEnum = "IPSEC_USER"
	ExtendedKeyUsageNameEnumAny                        ExtendedKeyUsageNameEnum = "ANY"
	ExtendedKeyUsageNameEnumNone                       ExtendedKeyUsageNameEnum = "NONE"
	ExtendedKeyUsageNameEnumCustom                     ExtendedKeyUsageNameEnum = "CUSTOM"
)
