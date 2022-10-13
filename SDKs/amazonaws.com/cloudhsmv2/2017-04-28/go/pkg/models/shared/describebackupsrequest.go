package shared

type DescribeBackupsRequest struct {
	Filters       map[string][]string `json:"Filters"`
	MaxResults    *int64              `json:"MaxResults"`
	NextToken     *string             `json:"NextToken"`
	SortAscending *bool               `json:"SortAscending"`
}
