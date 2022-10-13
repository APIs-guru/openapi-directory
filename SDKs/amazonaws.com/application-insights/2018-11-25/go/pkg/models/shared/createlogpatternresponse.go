package shared

type CreateLogPatternResponse struct {
	LogPattern        *LogPattern `json:"LogPattern"`
	ResourceGroupName *string     `json:"ResourceGroupName"`
}
