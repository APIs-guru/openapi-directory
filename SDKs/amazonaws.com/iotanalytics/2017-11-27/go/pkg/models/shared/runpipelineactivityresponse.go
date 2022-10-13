package shared

type RunPipelineActivityResponse struct {
	LogResult *string  `json:"logResult"`
	Payloads  []string `json:"payloads"`
}
