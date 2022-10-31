package shared

type ComputeCapacityStatus struct {
	Available *int64 `json:"Available,omitempty"`
	Desired   int64  `json:"Desired"`
	InUse     *int64 `json:"InUse,omitempty"`
	Running   *int64 `json:"Running,omitempty"`
}
