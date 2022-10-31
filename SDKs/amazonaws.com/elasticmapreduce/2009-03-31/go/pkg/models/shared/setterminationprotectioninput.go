package shared



type SetTerminationProtectionInput struct {
    JobFlowIds []string `json:"JobFlowIds"`
    TerminationProtected bool `json:"TerminationProtected"`
    
}

