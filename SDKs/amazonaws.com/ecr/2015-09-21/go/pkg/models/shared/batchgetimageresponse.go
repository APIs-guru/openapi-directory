package shared

type BatchGetImageResponse struct {
	Failures []ImageFailure `json:"failures,omitempty"`
	Images   []Image        `json:"images,omitempty"`
}
