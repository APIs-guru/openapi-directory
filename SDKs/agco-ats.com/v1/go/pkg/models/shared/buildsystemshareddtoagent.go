package shared

// BuildSystemSharedDtoAgent
// A DTO for an IAgent
type BuildSystemSharedDtoAgent struct {
	AgentID            *int32                                  `json:"AgentID,omitempty"`
	KeepAliveInterval  int32                                   `json:"KeepAliveInterval"`
	MachineName        string                                  `json:"MachineName"`
	Status             BuildSystemSharedDtoAgentStatus         `json:"Status"`
	StepConfigurations []BuildSystemSharedDtoStepConfiguration `json:"StepConfigurations,omitempty"`
	UserID             int32                                   `json:"UserID"`
}

// BuildSystemSharedDtoAgentInput
// A DTO for an IAgent
type BuildSystemSharedDtoAgentInput struct {
	AgentID           *int32                          `json:"AgentID,omitempty" form:"name=AgentID"`
	KeepAliveInterval int32                           `json:"KeepAliveInterval" form:"name=KeepAliveInterval"`
	MachineName       string                          `json:"MachineName" form:"name=MachineName"`
	Status            BuildSystemSharedDtoAgentStatus `json:"Status" form:"name=Status"`
	UserID            int32                           `json:"UserID" form:"name=UserID"`
}
