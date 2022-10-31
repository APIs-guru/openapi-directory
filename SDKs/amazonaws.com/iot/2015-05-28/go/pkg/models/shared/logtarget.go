package shared



type LogTarget struct {
    TargetName *string `json:"targetName,omitempty"`
    TargetType LogTargetTypeEnum `json:"targetType"`
    
}

