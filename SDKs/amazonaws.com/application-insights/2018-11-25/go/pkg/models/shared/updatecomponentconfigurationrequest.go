package shared



type UpdateComponentConfigurationRequest struct {
    ComponentConfiguration *string `json:"ComponentConfiguration,omitempty"`
    ComponentName string `json:"ComponentName"`
    Monitor *bool `json:"Monitor,omitempty"`
    ResourceGroupName string `json:"ResourceGroupName"`
    Tier *TierEnum `json:"Tier,omitempty"`
    
}

