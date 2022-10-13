package shared

type ComputeCapacityStatus struct {
	Available *int64 `json:"Available"`
	Desired   int64  `json:"Desired"`
	InUse     *int64 `json:"InUse"`
	Running   *int64 `json:"Running"`
}
