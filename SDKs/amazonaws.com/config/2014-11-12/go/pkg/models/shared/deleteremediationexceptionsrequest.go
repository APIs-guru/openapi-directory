package shared

type DeleteRemediationExceptionsRequest struct {
	ConfigRuleName string                            `json:"ConfigRuleName"`
	ResourceKeys   []RemediationExceptionResourceKey `json:"ResourceKeys"`
}
