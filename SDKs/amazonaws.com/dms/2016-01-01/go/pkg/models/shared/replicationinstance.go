package shared

import (
"time")

type ReplicationInstance struct {
    AllocatedStorage *int64 `json:"AllocatedStorage,omitempty"`
    AutoMinorVersionUpgrade *bool `json:"AutoMinorVersionUpgrade,omitempty"`
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    DNSNameServers *string `json:"DnsNameServers,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    FreeUntil *time.Time `json:"FreeUntil,omitempty"`
    InstanceCreateTime *time.Time `json:"InstanceCreateTime,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    MultiAz *bool `json:"MultiAZ,omitempty"`
    PendingModifiedValues *ReplicationPendingModifiedValues `json:"PendingModifiedValues,omitempty"`
    PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow,omitempty"`
    PubliclyAccessible *bool `json:"PubliclyAccessible,omitempty"`
    ReplicationInstanceArn *string `json:"ReplicationInstanceArn,omitempty"`
    ReplicationInstanceClass *string `json:"ReplicationInstanceClass,omitempty"`
    ReplicationInstanceIdentifier *string `json:"ReplicationInstanceIdentifier,omitempty"`
    ReplicationInstancePrivateIPAddress *string `json:"ReplicationInstancePrivateIpAddress,omitempty"`
    ReplicationInstancePrivateIPAddresses []string `json:"ReplicationInstancePrivateIpAddresses,omitempty"`
    ReplicationInstancePublicIPAddress *string `json:"ReplicationInstancePublicIpAddress,omitempty"`
    ReplicationInstancePublicIPAddresses []string `json:"ReplicationInstancePublicIpAddresses,omitempty"`
    ReplicationInstanceStatus *string `json:"ReplicationInstanceStatus,omitempty"`
    ReplicationSubnetGroup *ReplicationSubnetGroup `json:"ReplicationSubnetGroup,omitempty"`
    SecondaryAvailabilityZone *string `json:"SecondaryAvailabilityZone,omitempty"`
    VpcSecurityGroups []VpcSecurityGroupMembership `json:"VpcSecurityGroups,omitempty"`
    
}

