package shared

// ImageAttribute
// Describes an image attribute.
type ImageAttribute struct {
	BlockDeviceMappings []BlockDeviceMapping
	BootMode            *AttributeValue
	Description         *AttributeValue
	ImageID             *string
	KernelID            *AttributeValue
	LaunchPermissions   []LaunchPermission
	ProductCodes        []ProductCode
	RamdiskID           *AttributeValue
	SriovNetSupport     *AttributeValue
}
