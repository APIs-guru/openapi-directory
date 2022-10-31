package shared



type ScalingRule struct {
    Action ScalingAction `json:"Action"`
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    Trigger ScalingTrigger `json:"Trigger"`
    
}

