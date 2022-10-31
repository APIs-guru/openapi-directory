package shared



type DetectMitigationActionsTaskTarget struct {
    BehaviorName *string `json:"behaviorName,omitempty"`
    SecurityProfileName *string `json:"securityProfileName,omitempty"`
    ViolationIds []string `json:"violationIds,omitempty"`
    
}

