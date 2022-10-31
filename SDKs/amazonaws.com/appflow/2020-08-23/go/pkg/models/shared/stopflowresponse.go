package shared



type StopFlowResponse struct {
    FlowArn *string `json:"flowArn,omitempty"`
    FlowStatus *FlowStatusEnum `json:"flowStatus,omitempty"`
    
}

