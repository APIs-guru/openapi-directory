package shared



type PutPolicyResponse struct {
    Policy *Policy `json:"Policy,omitempty"`
    PolicyArn *string `json:"PolicyArn,omitempty"`
    
}

