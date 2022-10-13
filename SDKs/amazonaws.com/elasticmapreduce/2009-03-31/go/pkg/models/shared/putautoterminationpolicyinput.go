package shared

type PutAutoTerminationPolicyInput struct {
	AutoTerminationPolicy *AutoTerminationPolicy `json:"AutoTerminationPolicy"`
	ClusterID             string                 `json:"ClusterId"`
}
