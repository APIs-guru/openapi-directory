package shared

type DescribeRemediationExecutionStatusResponse struct {
	NextToken                    *string                      `json:"NextToken,omitempty"`
	RemediationExecutionStatuses []RemediationExecutionStatus `json:"RemediationExecutionStatuses,omitempty"`
}
