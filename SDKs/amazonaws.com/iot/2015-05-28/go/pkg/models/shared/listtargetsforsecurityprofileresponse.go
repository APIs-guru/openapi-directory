package shared



type ListTargetsForSecurityProfileResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SecurityProfileTargets []SecurityProfileTarget `json:"securityProfileTargets,omitempty"`
    
}

