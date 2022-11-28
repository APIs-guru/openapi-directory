package shared

// SetTerminationProtectionInput
//
//	The input argument to the <a>TerminationProtection</a> operation.
type SetTerminationProtectionInput struct {
	JobFlowIds           []string `json:"JobFlowIds"`
	TerminationProtected bool     `json:"TerminationProtected"`
}
