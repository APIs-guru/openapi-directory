package shared

type ParameterGroupStatus struct {
	NodeIdsToReboot      []string `json:"NodeIdsToReboot"`
	ParameterApplyStatus *string  `json:"ParameterApplyStatus"`
	ParameterGroupName   *string  `json:"ParameterGroupName"`
}
