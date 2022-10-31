package shared



type DeleteResourcePolicyRequest struct {
    PolicyHashCondition *string `json:"PolicyHashCondition,omitempty"`
    ResourceArn *string `json:"ResourceArn,omitempty"`
    
}

