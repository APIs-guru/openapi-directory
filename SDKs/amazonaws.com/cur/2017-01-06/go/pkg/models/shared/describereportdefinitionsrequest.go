package shared

// DescribeReportDefinitionsRequest
// Requests a list of AWS Cost and Usage reports owned by the account.
type DescribeReportDefinitionsRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
