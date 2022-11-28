package shared

// CPUUtilization
// CPU utilization metrics for an instance.
type CPUUtilization struct {
	IoWait     *float64
	Irq        *float64
	Idle       *float64
	Nice       *float64
	Privileged *float64
	SoftIrq    *float64
	System     *float64
	User       *float64
}
