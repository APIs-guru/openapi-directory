package shared

type DescribeConformancePacksResponse struct {
	ConformancePackDetails []ConformancePackDetail `json:"ConformancePackDetails"`
	NextToken              *string                 `json:"NextToken"`
}
