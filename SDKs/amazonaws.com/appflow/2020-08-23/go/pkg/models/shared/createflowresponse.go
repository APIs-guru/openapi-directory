package shared



type CreateFlowResponse struct {
    FlowArn *string `json:"flowArn,omitempty"`
    FlowStatus *FlowStatusEnum `json:"flowStatus,omitempty"`
    
}

