package shared

type UpdateGrokClassifierRequest struct {
	Classification *string `json:"Classification"`
	CustomPatterns *string `json:"CustomPatterns"`
	GrokPattern    *string `json:"GrokPattern"`
	Name           string  `json:"Name"`
}
