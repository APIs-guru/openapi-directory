package shared

// ParameterGroupStatus
// The status of a parameter group.
type ParameterGroupStatus struct {
	NodeIdsToReboot      []string `json:"NodeIdsToReboot,omitempty"`
	ParameterApplyStatus *string  `json:"ParameterApplyStatus,omitempty"`
	ParameterGroupName   *string  `json:"ParameterGroupName,omitempty"`
}
