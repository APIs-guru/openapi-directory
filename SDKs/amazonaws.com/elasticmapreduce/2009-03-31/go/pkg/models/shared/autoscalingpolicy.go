package shared

// AutoScalingPolicy
// An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
type AutoScalingPolicy struct {
	Constraints ScalingConstraints `json:"Constraints"`
	Rules       []ScalingRule      `json:"Rules"`
}
