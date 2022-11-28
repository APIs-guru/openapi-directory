package shared

// GlobalTableGlobalSecondaryIndexSettingsUpdate
// Represents the settings of a global secondary index for a global table that will be modified.
type GlobalTableGlobalSecondaryIndexSettingsUpdate struct {
	IndexName                                         string                     `json:"IndexName"`
	ProvisionedWriteCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate `json:"ProvisionedWriteCapacityAutoScalingSettingsUpdate,omitempty"`
	ProvisionedWriteCapacityUnits                     *int64                     `json:"ProvisionedWriteCapacityUnits,omitempty"`
}
