package shared

type DescribeRemediationExceptionsRequest struct {
	ConfigRuleName string                            `json:"ConfigRuleName"`
	Limit          *int64                            `json:"Limit"`
	NextToken      *string                           `json:"NextToken"`
	ResourceKeys   []RemediationExceptionResourceKey `json:"ResourceKeys"`
}
