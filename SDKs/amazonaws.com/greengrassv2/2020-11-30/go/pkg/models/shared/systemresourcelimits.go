package shared

type SystemResourceLimits struct {
	Cpus   *float64 `json:"cpus"`
	Memory *int64   `json:"memory"`
}
