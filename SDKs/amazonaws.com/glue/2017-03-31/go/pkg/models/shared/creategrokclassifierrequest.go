package shared

type CreateGrokClassifierRequest struct {
	Classification string  `json:"Classification"`
	CustomPatterns *string `json:"CustomPatterns,omitempty"`
	GrokPattern    string  `json:"GrokPattern"`
	Name           string  `json:"Name"`
}
