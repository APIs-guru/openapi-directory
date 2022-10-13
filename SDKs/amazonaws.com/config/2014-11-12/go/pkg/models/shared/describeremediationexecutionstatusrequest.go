package shared

type DescribeRemediationExecutionStatusRequest struct {
	ConfigRuleName string        `json:"ConfigRuleName"`
	Limit          *int64        `json:"Limit"`
	NextToken      *string       `json:"NextToken"`
	ResourceKeys   []ResourceKey `json:"ResourceKeys"`
}
