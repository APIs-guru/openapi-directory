package shared

type HealthCheck struct {
	Command     []string `json:"command"`
	Interval    *int64   `json:"interval"`
	Retries     *int64   `json:"retries"`
	StartPeriod *int64   `json:"startPeriod"`
	Timeout     *int64   `json:"timeout"`
}
