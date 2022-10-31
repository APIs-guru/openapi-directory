package shared



type StartFlowResponse struct {
    ExecutionID *string `json:"executionId,omitempty"`
    FlowArn *string `json:"flowArn,omitempty"`
    FlowStatus *FlowStatusEnum `json:"flowStatus,omitempty"`
    
}

