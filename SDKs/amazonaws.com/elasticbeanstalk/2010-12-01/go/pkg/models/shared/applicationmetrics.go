package shared

// ApplicationMetrics
// Application request metrics for an AWS Elastic Beanstalk environment.
type ApplicationMetrics struct {
	Duration     *int64
	Latency      *Latency
	RequestCount *int64
	StatusCodes  *StatusCodes
}
