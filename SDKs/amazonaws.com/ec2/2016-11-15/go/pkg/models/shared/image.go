package shared

// Image
// Describes an image.
type Image struct {
	Architecture        *ArchitectureValuesEnum
	BlockDeviceMappings []BlockDeviceMapping
	BootMode            *BootModeValuesEnum
	CreationDate        *string
	DeprecationTime     *string
	Description         *string
	EnaSupport          *bool
	Hypervisor          *HypervisorTypeEnum
	ImageID             *string
	ImageLocation       *string
	ImageOwnerAlias     *string
	ImageType           *ImageTypeValuesEnum
	KernelID            *string
	Name                *string
	OwnerID             *string
	Platform            *PlatformValuesEnum
	PlatformDetails     *string
	ProductCodes        []ProductCode
	Public              *bool
	RamdiskID           *string
	RootDeviceName      *string
	RootDeviceType      *DeviceTypeEnum
	SriovNetSupport     *string
	State               *ImageStateEnum
	StateReason         *StateReason
	Tags                []Tag
	UsageOperation      *string
	VirtualizationType  *VirtualizationTypeEnum
}
