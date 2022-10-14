package shared

type DescribeLogPatternResponse struct {
	LogPattern        *LogPattern `json:"LogPattern,omitempty"`
	ResourceGroupName *string     `json:"ResourceGroupName,omitempty"`
}
