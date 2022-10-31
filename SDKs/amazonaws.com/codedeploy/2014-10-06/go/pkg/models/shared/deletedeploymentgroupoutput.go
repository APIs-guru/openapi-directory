package shared



type DeleteDeploymentGroupOutput struct {
    HooksNotCleanedUp []AutoScalingGroup `json:"hooksNotCleanedUp,omitempty"`
    
}

