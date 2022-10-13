package shared

type GlobalTableGlobalSecondaryIndexSettingsUpdate struct {
	IndexName                                         string                     `json:"IndexName"`
	ProvisionedWriteCapacityAutoScalingSettingsUpdate *AutoScalingSettingsUpdate `json:"ProvisionedWriteCapacityAutoScalingSettingsUpdate"`
	ProvisionedWriteCapacityUnits                     *int64                     `json:"ProvisionedWriteCapacityUnits"`
}
