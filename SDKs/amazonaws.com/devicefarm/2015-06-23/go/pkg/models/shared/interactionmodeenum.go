package shared

type InteractionModeEnum string

const (
	InteractionModeEnumInteractive InteractionModeEnum = "INTERACTIVE"
	InteractionModeEnumNoVideo     InteractionModeEnum = "NO_VIDEO"
	InteractionModeEnumVideoOnly   InteractionModeEnum = "VIDEO_ONLY"
)
