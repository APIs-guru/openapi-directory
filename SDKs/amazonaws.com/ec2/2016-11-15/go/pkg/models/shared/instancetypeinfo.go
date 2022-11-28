package shared

// InstanceTypeInfo
// Describes the instance type.
type InstanceTypeInfo struct {
	AutoRecoverySupported         *bool
	BareMetal                     *bool
	BurstablePerformanceSupported *bool
	CurrentGeneration             *bool
	DedicatedHostsSupported       *bool
	EbsInfo                       *EbsInfo
	FpgaInfo                      *FpgaInfo
	FreeTierEligible              *bool
	GpuInfo                       *GpuInfo
	HibernationSupported          *bool
	Hypervisor                    *InstanceTypeHypervisorEnum
	InferenceAcceleratorInfo      *InferenceAcceleratorInfo
	InstanceStorageInfo           *InstanceStorageInfo
	InstanceStorageSupported      *bool
	InstanceType                  *InstanceTypeEnum
	MemoryInfo                    *MemoryInfo
	NetworkInfo                   *NetworkInfo
	PlacementGroupInfo            *PlacementGroupInfo
	ProcessorInfo                 *ProcessorInfo
	SupportedBootModes            []BootModeTypeEnum
	SupportedRootDeviceTypes      []RootDeviceTypeEnum
	SupportedUsageClasses         []UsageClassTypeEnum
	SupportedVirtualizationTypes  []VirtualizationTypeEnum
	VCPUInfo                      *VCPUInfo
}
