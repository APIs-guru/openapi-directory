package shared

type ErrorResponse struct {
	Message *string `json:"message"`
	Status  *int64  `json:"status"`
}
