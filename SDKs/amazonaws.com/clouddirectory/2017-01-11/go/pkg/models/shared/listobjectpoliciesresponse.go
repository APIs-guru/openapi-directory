package shared



type ListObjectPoliciesResponse struct {
    AttachedPolicyIds []string `json:"AttachedPolicyIds,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

