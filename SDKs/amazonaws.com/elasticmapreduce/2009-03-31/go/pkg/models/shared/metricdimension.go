package shared

// MetricDimension
// A CloudWatch dimension, which is specified using a <code>Key</code> (known as a <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables the rule to bootstrap when the cluster ID becomes available.
type MetricDimension struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
