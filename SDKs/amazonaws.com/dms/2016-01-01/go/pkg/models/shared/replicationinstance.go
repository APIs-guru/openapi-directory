package shared

import (
	"time"
)

type ReplicationInstance struct {
	AllocatedStorage                      *int64                            `json:"AllocatedStorage"`
	AutoMinorVersionUpgrade               *bool                             `json:"AutoMinorVersionUpgrade"`
	AvailabilityZone                      *string                           `json:"AvailabilityZone"`
	DNSNameServers                        *string                           `json:"DnsNameServers"`
	EngineVersion                         *string                           `json:"EngineVersion"`
	FreeUntil                             *time.Time                        `json:"FreeUntil"`
	InstanceCreateTime                    *time.Time                        `json:"InstanceCreateTime"`
	KmsKeyID                              *string                           `json:"KmsKeyId"`
	MultiAz                               *bool                             `json:"MultiAZ"`
	PendingModifiedValues                 *ReplicationPendingModifiedValues `json:"PendingModifiedValues"`
	PreferredMaintenanceWindow            *string                           `json:"PreferredMaintenanceWindow"`
	PubliclyAccessible                    *bool                             `json:"PubliclyAccessible"`
	ReplicationInstanceArn                *string                           `json:"ReplicationInstanceArn"`
	ReplicationInstanceClass              *string                           `json:"ReplicationInstanceClass"`
	ReplicationInstanceIdentifier         *string                           `json:"ReplicationInstanceIdentifier"`
	ReplicationInstancePrivateIPAddress   *string                           `json:"ReplicationInstancePrivateIpAddress"`
	ReplicationInstancePrivateIPAddresses []string                          `json:"ReplicationInstancePrivateIpAddresses"`
	ReplicationInstancePublicIPAddress    *string                           `json:"ReplicationInstancePublicIpAddress"`
	ReplicationInstancePublicIPAddresses  []string                          `json:"ReplicationInstancePublicIpAddresses"`
	ReplicationInstanceStatus             *string                           `json:"ReplicationInstanceStatus"`
	ReplicationSubnetGroup                *ReplicationSubnetGroup           `json:"ReplicationSubnetGroup"`
	SecondaryAvailabilityZone             *string                           `json:"SecondaryAvailabilityZone"`
	VpcSecurityGroups                     []VpcSecurityGroupMembership      `json:"VpcSecurityGroups"`
}
