package shared



type Device struct {
    Arn *string `json:"arn,omitempty"`
    Availability *DeviceAvailabilityEnum `json:"availability,omitempty"`
    Carrier *string `json:"carrier,omitempty"`
    CPU *CPU `json:"cpu,omitempty"`
    FleetName *string `json:"fleetName,omitempty"`
    FleetType *string `json:"fleetType,omitempty"`
    FormFactor *DeviceFormFactorEnum `json:"formFactor,omitempty"`
    HeapSize *int64 `json:"heapSize,omitempty"`
    Image *string `json:"image,omitempty"`
    Instances []DeviceInstance `json:"instances,omitempty"`
    Manufacturer *string `json:"manufacturer,omitempty"`
    Memory *int64 `json:"memory,omitempty"`
    Model *string `json:"model,omitempty"`
    ModelID *string `json:"modelId,omitempty"`
    Name *string `json:"name,omitempty"`
    Os *string `json:"os,omitempty"`
    Platform *DevicePlatformEnum `json:"platform,omitempty"`
    Radio *string `json:"radio,omitempty"`
    RemoteAccessEnabled *bool `json:"remoteAccessEnabled,omitempty"`
    RemoteDebugEnabled *bool `json:"remoteDebugEnabled,omitempty"`
    Resolution *Resolution `json:"resolution,omitempty"`
    
}

