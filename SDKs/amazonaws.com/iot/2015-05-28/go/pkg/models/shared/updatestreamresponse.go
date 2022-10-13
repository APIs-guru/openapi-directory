package shared

type UpdateStreamResponse struct {
	Description   *string `json:"description"`
	StreamArn     *string `json:"streamArn"`
	StreamID      *string `json:"streamId"`
	StreamVersion *int64  `json:"streamVersion"`
}
