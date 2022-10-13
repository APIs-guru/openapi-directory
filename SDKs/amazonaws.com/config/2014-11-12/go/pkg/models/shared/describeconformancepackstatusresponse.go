package shared

type DescribeConformancePackStatusResponse struct {
	ConformancePackStatusDetails []ConformancePackStatusDetail `json:"ConformancePackStatusDetails"`
	NextToken                    *string                       `json:"NextToken"`
}
