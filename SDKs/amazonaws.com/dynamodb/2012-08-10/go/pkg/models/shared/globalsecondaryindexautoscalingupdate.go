package shared

type GlobalSecondaryIndexAutoScalingUpdate struct {
	IndexName                                 *string                    `json:"IndexName"`
	ProvisionedWriteCapacityAutoScalingUpdate *AutoScalingSettingsUpdate `json:"ProvisionedWriteCapacityAutoScalingUpdate"`
}
