package shared

type DescribeTestCasesInput struct {
	Filter     *TestCaseFilter `json:"filter,omitempty"`
	MaxResults *int64          `json:"maxResults,omitempty"`
	NextToken  *string         `json:"nextToken,omitempty"`
	ReportArn  string          `json:"reportArn"`
}
