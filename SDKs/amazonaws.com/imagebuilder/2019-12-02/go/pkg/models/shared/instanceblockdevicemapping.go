package shared

type InstanceBlockDeviceMapping struct {
	DeviceName  *string                              `json:"deviceName"`
	Ebs         *EbsInstanceBlockDeviceSpecification `json:"ebs"`
	NoDevice    *string                              `json:"noDevice"`
	VirtualName *string                              `json:"virtualName"`
}
