package shared

type SynchronousJobRead struct {
	ConfigID   *string           `json:"configId"`
	ConfigType JobConfigTypeEnum `json:"configType"`
	CreatedAt  int64             `json:"createdAt"`
	EndedAt    int64             `json:"endedAt"`
	ID         string            `json:"id"`
	Logs       *LogRead          `json:"logs"`
	Succeeded  bool              `json:"succeeded"`
}
