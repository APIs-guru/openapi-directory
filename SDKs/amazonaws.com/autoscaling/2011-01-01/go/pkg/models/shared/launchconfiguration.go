package shared

import (
	"time"
)

// LaunchConfiguration
// Describes a launch configuration.
type LaunchConfiguration struct {
	AssociatePublicIPAddress     *bool
	BlockDeviceMappings          []BlockDeviceMapping
	ClassicLinkVpcID             *string
	ClassicLinkVpcSecurityGroups []string
	CreatedTime                  time.Time
	EbsOptimized                 *bool
	IamInstanceProfile           *string
	ImageID                      string
	InstanceMonitoring           *InstanceMonitoring
	InstanceType                 string
	KernelID                     *string
	KeyName                      *string
	LaunchConfigurationArn       *string
	LaunchConfigurationName      string
	MetadataOptions              *InstanceMetadataOptions
	PlacementTenancy             *string
	RamdiskID                    *string
	SecurityGroups               []string
	SpotPrice                    *string
	UserData                     *string
}
