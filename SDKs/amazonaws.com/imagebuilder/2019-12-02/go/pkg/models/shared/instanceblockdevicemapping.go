package shared



type InstanceBlockDeviceMapping struct {
    DeviceName *string `json:"deviceName,omitempty"`
    Ebs *EbsInstanceBlockDeviceSpecification `json:"ebs,omitempty"`
    NoDevice *string `json:"noDevice,omitempty"`
    VirtualName *string `json:"virtualName,omitempty"`
    
}

