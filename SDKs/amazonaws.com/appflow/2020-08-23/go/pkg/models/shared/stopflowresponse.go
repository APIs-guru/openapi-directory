package shared

type StopFlowResponse struct {
	FlowArn    *string         `json:"flowArn"`
	FlowStatus *FlowStatusEnum `json:"flowStatus"`
}
