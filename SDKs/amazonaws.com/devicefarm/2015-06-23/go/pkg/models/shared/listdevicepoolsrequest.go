package shared



type ListDevicePoolsRequest struct {
    Arn string `json:"arn"`
    NextToken *string `json:"nextToken,omitempty"`
    Type *DevicePoolTypeEnum `json:"type,omitempty"`
    
}

