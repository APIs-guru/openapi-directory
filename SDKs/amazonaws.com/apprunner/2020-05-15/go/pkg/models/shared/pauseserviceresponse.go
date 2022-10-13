package shared

type PauseServiceResponse struct {
	OperationID *string `json:"OperationId"`
	Service     Service `json:"Service"`
}
