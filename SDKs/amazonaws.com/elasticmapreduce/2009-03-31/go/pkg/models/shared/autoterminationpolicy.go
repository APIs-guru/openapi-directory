package shared

// AutoTerminationPolicy
// An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.
type AutoTerminationPolicy struct {
	IdleTimeout *int64 `json:"IdleTimeout,omitempty"`
}
