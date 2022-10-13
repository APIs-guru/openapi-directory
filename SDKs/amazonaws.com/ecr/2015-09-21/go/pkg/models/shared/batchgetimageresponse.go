package shared

type BatchGetImageResponse struct {
	Failures []ImageFailure `json:"failures"`
	Images   []Image        `json:"images"`
}
