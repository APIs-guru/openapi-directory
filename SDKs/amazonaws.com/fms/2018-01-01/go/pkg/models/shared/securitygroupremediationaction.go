package shared

type SecurityGroupRemediationAction struct {
	Description           *string                       `json:"Description,omitempty"`
	IsDefaultAction       *bool                         `json:"IsDefaultAction,omitempty"`
	RemediationActionType *RemediationActionTypeEnum    `json:"RemediationActionType,omitempty"`
	RemediationResult     *SecurityGroupRuleDescription `json:"RemediationResult,omitempty"`
}
