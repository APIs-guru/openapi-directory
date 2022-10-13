package shared

type DocumentServiceException struct {
	Message *string `json:"message"`
	Status  *string `json:"status"`
}
