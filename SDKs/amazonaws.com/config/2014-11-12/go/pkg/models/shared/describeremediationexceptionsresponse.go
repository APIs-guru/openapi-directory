package shared

type DescribeRemediationExceptionsResponse struct {
	NextToken             *string                `json:"NextToken"`
	RemediationExceptions []RemediationException `json:"RemediationExceptions"`
}
