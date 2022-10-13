package shared

type BuildSystemSharedDtoAgent struct {
	AgentID            *int32                                  `json:"AgentID"`
	KeepAliveInterval  int32                                   `json:"KeepAliveInterval"`
	MachineName        string                                  `json:"MachineName"`
	Status             BuildSystemSharedDtoAgentStatus         `json:"Status"`
	StepConfigurations []BuildSystemSharedDtoStepConfiguration `json:"StepConfigurations"`
	UserID             int32                                   `json:"UserID"`
}
