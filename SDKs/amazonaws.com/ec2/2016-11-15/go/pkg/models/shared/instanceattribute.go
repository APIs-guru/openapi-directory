package shared

// InstanceAttribute
// Describes an instance attribute.
type InstanceAttribute struct {
	BlockDeviceMappings               []InstanceBlockDeviceMapping
	DisableAPITermination             *AttributeBooleanValue
	EbsOptimized                      *AttributeBooleanValue
	EnaSupport                        *AttributeBooleanValue
	EnclaveOptions                    *EnclaveOptions
	Groups                            []GroupIdentifier
	InstanceID                        *string
	InstanceInitiatedShutdownBehavior *AttributeValue
	InstanceType                      *AttributeValue
	KernelID                          *AttributeValue
	ProductCodes                      []ProductCode
	RamdiskID                         *AttributeValue
	RootDeviceName                    *AttributeValue
	SourceDestCheck                   *AttributeBooleanValue
	SriovNetSupport                   *AttributeValue
	UserData                          *AttributeValue
}
