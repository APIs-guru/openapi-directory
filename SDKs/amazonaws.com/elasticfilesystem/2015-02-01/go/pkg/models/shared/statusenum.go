package shared

type StatusEnum string

const (
	StatusEnumEnabled   StatusEnum = "ENABLED"
	StatusEnumEnabling  StatusEnum = "ENABLING"
	StatusEnumDisabled  StatusEnum = "DISABLED"
	StatusEnumDisabling StatusEnum = "DISABLING"
)
