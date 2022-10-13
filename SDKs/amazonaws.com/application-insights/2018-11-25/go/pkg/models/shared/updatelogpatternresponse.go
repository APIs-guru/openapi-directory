package shared

type UpdateLogPatternResponse struct {
	LogPattern        *LogPattern `json:"LogPattern"`
	ResourceGroupName *string     `json:"ResourceGroupName"`
}
