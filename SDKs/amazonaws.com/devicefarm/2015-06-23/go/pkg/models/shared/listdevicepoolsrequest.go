package shared

type ListDevicePoolsRequest struct {
	Arn       string              `json:"arn"`
	NextToken *string             `json:"nextToken"`
	Type      *DevicePoolTypeEnum `json:"type"`
}
