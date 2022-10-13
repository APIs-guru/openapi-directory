package shared

type GetImageResponse struct {
	Image     *Image  `json:"image"`
	RequestID *string `json:"requestId"`
}
