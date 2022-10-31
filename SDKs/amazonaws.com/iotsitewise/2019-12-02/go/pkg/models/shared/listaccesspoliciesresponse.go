package shared



type ListAccessPoliciesResponse struct {
    AccessPolicySummaries []AccessPolicySummary `json:"accessPolicySummaries"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

