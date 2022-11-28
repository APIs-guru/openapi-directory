package shared

// SystemStatus
// CPU utilization and load average metrics for an Amazon EC2 instance.
type SystemStatus struct {
	CPUUtilization *CPUUtilization
	LoadAverage    []float64
}
