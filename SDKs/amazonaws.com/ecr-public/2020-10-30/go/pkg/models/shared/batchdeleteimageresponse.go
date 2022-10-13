package shared

type BatchDeleteImageResponse struct {
	Failures []ImageFailure    `json:"failures"`
	ImageIds []ImageIdentifier `json:"imageIds"`
}
