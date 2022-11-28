package shared

// LogTarget
// A log target.
type LogTarget struct {
	TargetName *string           `json:"targetName,omitempty"`
	TargetType LogTargetTypeEnum `json:"targetType"`
}
