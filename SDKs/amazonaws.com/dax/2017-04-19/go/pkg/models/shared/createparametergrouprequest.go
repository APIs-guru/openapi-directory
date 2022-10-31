package shared



type CreateParameterGroupRequest struct {
    Description *string `json:"Description,omitempty"`
    ParameterGroupName string `json:"ParameterGroupName"`
    
}

