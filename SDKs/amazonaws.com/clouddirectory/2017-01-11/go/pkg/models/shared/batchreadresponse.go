package shared

type BatchReadResponse struct {
	Responses []BatchReadOperationResponse `json:"Responses"`
}
