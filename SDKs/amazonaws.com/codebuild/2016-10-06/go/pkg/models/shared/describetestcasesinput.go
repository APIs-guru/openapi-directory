package shared

type DescribeTestCasesInput struct {
	Filter     *TestCaseFilter `json:"filter"`
	MaxResults *int64          `json:"maxResults"`
	NextToken  *string         `json:"nextToken"`
	ReportArn  string          `json:"reportArn"`
}
