package shared



type BuildSystemSharedDtoAgent struct {
    AgentID *int32 `json:"AgentID,omitempty"`
    KeepAliveInterval int32 `json:"KeepAliveInterval"`
    MachineName string `json:"MachineName"`
    Status BuildSystemSharedDtoAgentStatus `json:"Status"`
    StepConfigurations []BuildSystemSharedDtoStepConfiguration `json:"StepConfigurations,omitempty"`
    UserID int32 `json:"UserID"`
    
}

