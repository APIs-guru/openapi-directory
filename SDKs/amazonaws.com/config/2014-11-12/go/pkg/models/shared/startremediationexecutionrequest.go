package shared



type StartRemediationExecutionRequest struct {
    ConfigRuleName string `json:"ConfigRuleName"`
    ResourceKeys []ResourceKey `json:"ResourceKeys"`
    
}

