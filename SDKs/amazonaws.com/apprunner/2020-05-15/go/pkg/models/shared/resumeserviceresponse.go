package shared

type ResumeServiceResponse struct {
	OperationID *string `json:"OperationId,omitempty"`
	Service     Service `json:"Service"`
}
