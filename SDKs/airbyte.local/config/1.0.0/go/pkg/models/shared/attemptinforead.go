package shared

type AttemptInfoRead struct {
	Attempt AttemptRead `json:"attempt"`
	Logs    LogRead     `json:"logs"`
}
