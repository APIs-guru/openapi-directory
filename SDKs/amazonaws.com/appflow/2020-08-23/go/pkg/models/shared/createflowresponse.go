package shared

type CreateFlowResponse struct {
	FlowArn    *string         `json:"flowArn"`
	FlowStatus *FlowStatusEnum `json:"flowStatus"`
}
