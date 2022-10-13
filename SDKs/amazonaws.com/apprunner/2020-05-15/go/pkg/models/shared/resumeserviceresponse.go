package shared

type ResumeServiceResponse struct {
	OperationID *string `json:"OperationId"`
	Service     Service `json:"Service"`
}
