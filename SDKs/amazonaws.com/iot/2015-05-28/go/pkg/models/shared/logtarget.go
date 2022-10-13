package shared

type LogTarget struct {
	TargetName *string           `json:"targetName"`
	TargetType LogTargetTypeEnum `json:"targetType"`
}
