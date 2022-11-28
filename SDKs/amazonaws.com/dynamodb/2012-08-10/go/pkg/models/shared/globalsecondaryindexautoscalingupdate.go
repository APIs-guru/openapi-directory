package shared

// GlobalSecondaryIndexAutoScalingUpdate
// Represents the auto scaling settings of a global secondary index for a global table that will be modified.
type GlobalSecondaryIndexAutoScalingUpdate struct {
	IndexName                                 *string                    `json:"IndexName,omitempty"`
	ProvisionedWriteCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ProvisionedWriteCapacityAutoScalingUpdate,omitempty"`
}
