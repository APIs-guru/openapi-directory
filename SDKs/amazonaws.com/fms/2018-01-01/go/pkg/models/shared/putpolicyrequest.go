package shared



type PutPolicyRequest struct {
    Policy Policy `json:"Policy"`
    TagList []Tag `json:"TagList,omitempty"`
    
}

