package shared

// SecurityGroupRemediationAction
// Remediation option for the rule specified in the <code>ViolationTarget</code>.
type SecurityGroupRemediationAction struct {
	Description           *string                       `json:"Description,omitempty"`
	IsDefaultAction       *bool                         `json:"IsDefaultAction,omitempty"`
	RemediationActionType *RemediationActionTypeEnum    `json:"RemediationActionType,omitempty"`
	RemediationResult     *SecurityGroupRuleDescription `json:"RemediationResult,omitempty"`
}
