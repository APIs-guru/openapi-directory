package shared

type DescribeConformancePackStatusRequest struct {
	ConformancePackNames []string `json:"ConformancePackNames,omitempty"`
	Limit                *int64   `json:"Limit,omitempty"`
	NextToken            *string  `json:"NextToken,omitempty"`
}
