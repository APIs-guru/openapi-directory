package shared

import (
	"time"
)

// Instance
// Describes an instance.
type Instance struct {
	AmiLaunchIndex                          *int64
	Architecture                            *ArchitectureValuesEnum
	BlockDeviceMappings                     []InstanceBlockDeviceMapping
	BootMode                                *BootModeValuesEnum
	CapacityReservationID                   *string
	CapacityReservationSpecification        *CapacityReservationSpecificationResponse
	ClientToken                             *string
	CPUOptions                              *CPUOptions
	EbsOptimized                            *bool
	ElasticGpuAssociations                  []ElasticGpuAssociation
	ElasticInferenceAcceleratorAssociations []ElasticInferenceAcceleratorAssociation
	EnaSupport                              *bool
	EnclaveOptions                          *EnclaveOptions
	HibernationOptions                      *HibernationOptions
	Hypervisor                              *HypervisorTypeEnum
	IamInstanceProfile                      *IamInstanceProfile
	ImageID                                 *string
	InstanceID                              *string
	InstanceLifecycle                       *InstanceLifecycleTypeEnum
	InstanceType                            *InstanceTypeEnum
	KernelID                                *string
	KeyName                                 *string
	LaunchTime                              *time.Time
	Licenses                                []LicenseConfiguration
	MetadataOptions                         *InstanceMetadataOptionsResponse
	Monitoring                              *Monitoring
	NetworkInterfaces                       []InstanceNetworkInterface
	OutpostArn                              *string
	Placement                               *Placement
	Platform                                *PlatformValuesEnum
	PrivateDNSName                          *string
	PrivateIPAddress                        *string
	ProductCodes                            []ProductCode
	PublicDNSName                           *string
	PublicIPAddress                         *string
	RamdiskID                               *string
	RootDeviceName                          *string
	RootDeviceType                          *DeviceTypeEnum
	SecurityGroups                          []GroupIdentifier
	SourceDestCheck                         *bool
	SpotInstanceRequestID                   *string
	SriovNetSupport                         *string
	State                                   *InstanceState
	StateReason                             *StateReason
	StateTransitionReason                   *string
	SubnetID                                *string
	Tags                                    []Tag
	VirtualizationType                      *VirtualizationTypeEnum
	VpcID                                   *string
}
