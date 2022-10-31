package shared

type HealthCheck struct {
	Command     []string `json:"command"`
	Interval    *int64   `json:"interval,omitempty"`
	Retries     *int64   `json:"retries,omitempty"`
	StartPeriod *int64   `json:"startPeriod,omitempty"`
	Timeout     *int64   `json:"timeout,omitempty"`
}
