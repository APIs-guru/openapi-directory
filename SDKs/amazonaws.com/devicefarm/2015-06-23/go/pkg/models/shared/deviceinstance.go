package shared

// DeviceInstance
// Represents the device instance.
type DeviceInstance struct {
	Arn             *string             `json:"arn,omitempty"`
	DeviceArn       *string             `json:"deviceArn,omitempty"`
	InstanceProfile *InstanceProfile    `json:"instanceProfile,omitempty"`
	Labels          []string            `json:"labels,omitempty"`
	Status          *InstanceStatusEnum `json:"status,omitempty"`
	Udid            *string             `json:"udid,omitempty"`
}
