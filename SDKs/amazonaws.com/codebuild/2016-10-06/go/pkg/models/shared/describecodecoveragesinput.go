package shared

type DescribeCodeCoveragesInput struct {
	MaxLineCoveragePercentage *float64                          `json:"maxLineCoveragePercentage"`
	MaxResults                *int64                            `json:"maxResults"`
	MinLineCoveragePercentage *float64                          `json:"minLineCoveragePercentage"`
	NextToken                 *string                           `json:"nextToken"`
	ReportArn                 string                            `json:"reportArn"`
	SortBy                    *ReportCodeCoverageSortByTypeEnum `json:"sortBy"`
	SortOrder                 *SortOrderTypeEnum                `json:"sortOrder"`
}
