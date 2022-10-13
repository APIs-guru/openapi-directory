package shared

type StartFlowResponse struct {
	ExecutionID *string         `json:"executionId"`
	FlowArn     *string         `json:"flowArn"`
	FlowStatus  *FlowStatusEnum `json:"flowStatus"`
}
