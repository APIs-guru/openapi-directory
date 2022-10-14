package shared

type IncreaseReplicationFactorRequest struct {
	AvailabilityZones    []string `json:"AvailabilityZones,omitempty"`
	ClusterName          string   `json:"ClusterName"`
	NewReplicationFactor int64    `json:"NewReplicationFactor"`
}
