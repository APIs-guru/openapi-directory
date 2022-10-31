package shared



type ParameterGroupStatus struct {
    NodeIdsToReboot []string `json:"NodeIdsToReboot,omitempty"`
    ParameterApplyStatus *string `json:"ParameterApplyStatus,omitempty"`
    ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
    
}

