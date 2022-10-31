package shared

type ReplicationRule struct {
	Destinations []ReplicationDestination `json:"destinations"`
}
