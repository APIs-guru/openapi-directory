package shared



type DevicePool struct {
    Arn *string `json:"arn,omitempty"`
    Description *string `json:"description,omitempty"`
    MaxDevices *int64 `json:"maxDevices,omitempty"`
    Name *string `json:"name,omitempty"`
    Rules []Rule `json:"rules,omitempty"`
    Type *DevicePoolTypeEnum `json:"type,omitempty"`
    
}

