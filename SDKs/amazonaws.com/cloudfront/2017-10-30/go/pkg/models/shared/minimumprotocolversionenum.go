package shared

type MinimumProtocolVersionEnum string

const (
	MinimumProtocolVersionEnumSsLv3      MinimumProtocolVersionEnum = "SSLv3"
	MinimumProtocolVersionEnumTlSv1      MinimumProtocolVersionEnum = "TLSv1"
	MinimumProtocolVersionEnumTlSv12016  MinimumProtocolVersionEnum = "TLSv1_2016"
	MinimumProtocolVersionEnumTlSv112016 MinimumProtocolVersionEnum = "TLSv1.1_2016"
	MinimumProtocolVersionEnumTlSv122018 MinimumProtocolVersionEnum = "TLSv1.2_2018"
)
