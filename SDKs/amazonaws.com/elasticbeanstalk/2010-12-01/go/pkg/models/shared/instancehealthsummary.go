package shared

// InstanceHealthSummary
// Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.
type InstanceHealthSummary struct {
	Degraded *int64
	Info     *int64
	NoData   *int64
	Ok       *int64
	Pending  *int64
	Severe   *int64
	Unknown  *int64
	Warning  *int64
}
