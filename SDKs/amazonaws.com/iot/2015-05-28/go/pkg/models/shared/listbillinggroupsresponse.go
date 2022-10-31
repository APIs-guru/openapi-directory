package shared



type ListBillingGroupsResponse struct {
    BillingGroups []GroupNameAndArn `json:"billingGroups,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

