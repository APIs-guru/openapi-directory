package shared

type DescribeRemediationExecutionStatusResponse struct {
	NextToken                    *string                      `json:"NextToken"`
	RemediationExecutionStatuses []RemediationExecutionStatus `json:"RemediationExecutionStatuses"`
}
