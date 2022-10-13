package shared

type DecreaseReplicationFactorRequest struct {
	AvailabilityZones    []string `json:"AvailabilityZones"`
	ClusterName          string   `json:"ClusterName"`
	NewReplicationFactor int64    `json:"NewReplicationFactor"`
	NodeIdsToRemove      []string `json:"NodeIdsToRemove"`
}
