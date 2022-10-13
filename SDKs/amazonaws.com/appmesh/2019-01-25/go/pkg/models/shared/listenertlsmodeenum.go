package shared

type ListenerTLSModeEnum string

const (
	ListenerTLSModeEnumStrict     ListenerTLSModeEnum = "STRICT"
	ListenerTLSModeEnumPermissive ListenerTLSModeEnum = "PERMISSIVE"
	ListenerTLSModeEnumDisabled   ListenerTLSModeEnum = "DISABLED"
)
