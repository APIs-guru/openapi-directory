package shared

// ProvisionedThroughputOverride
// Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
type ProvisionedThroughputOverride struct {
	ReadCapacityUnits *int64 `json:"ReadCapacityUnits,omitempty"`
}
