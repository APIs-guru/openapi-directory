package shared

type DescribeRemediationExceptionsRequest struct {
	ConfigRuleName string                            `json:"ConfigRuleName"`
	Limit          *int64                            `json:"Limit,omitempty"`
	NextToken      *string                           `json:"NextToken,omitempty"`
	ResourceKeys   []RemediationExceptionResourceKey `json:"ResourceKeys,omitempty"`
}
