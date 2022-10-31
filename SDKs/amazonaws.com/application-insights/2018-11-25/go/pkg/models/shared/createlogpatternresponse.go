package shared

type CreateLogPatternResponse struct {
	LogPattern        *LogPattern `json:"LogPattern,omitempty"`
	ResourceGroupName *string     `json:"ResourceGroupName,omitempty"`
}
