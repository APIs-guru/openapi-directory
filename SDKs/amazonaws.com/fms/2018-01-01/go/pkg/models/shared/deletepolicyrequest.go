package shared



type DeletePolicyRequest struct {
    DeleteAllPolicyResources *bool `json:"DeleteAllPolicyResources,omitempty"`
    PolicyID string `json:"PolicyId"`
    
}

