package shared

type DescribeLogPatternResponse struct {
	LogPattern        *LogPattern `json:"LogPattern"`
	ResourceGroupName *string     `json:"ResourceGroupName"`
}
