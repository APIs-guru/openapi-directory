package shared

type SecurityGroupRemediationAction struct {
	Description           *string                       `json:"Description"`
	IsDefaultAction       *bool                         `json:"IsDefaultAction"`
	RemediationActionType *RemediationActionTypeEnum    `json:"RemediationActionType"`
	RemediationResult     *SecurityGroupRuleDescription `json:"RemediationResult"`
}
