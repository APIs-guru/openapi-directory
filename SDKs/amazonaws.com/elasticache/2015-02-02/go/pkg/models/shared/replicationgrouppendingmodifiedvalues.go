package shared

// ReplicationGroupPendingModifiedValues
// The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
type ReplicationGroupPendingModifiedValues struct {
	AuthTokenStatus           *AuthTokenUpdateStatusEnum
	AutomaticFailoverStatus   *PendingAutomaticFailoverStatusEnum
	LogDeliveryConfigurations []PendingLogDeliveryConfiguration
	PrimaryClusterID          *string
	Resharding                *ReshardingStatus
	UserGroups                *UserGroupsUpdateStatus
}
