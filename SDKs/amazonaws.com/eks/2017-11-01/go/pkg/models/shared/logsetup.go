package shared

type LogSetup struct {
	Enabled *bool         `json:"enabled"`
	Types   []LogTypeEnum `json:"types"`
}
