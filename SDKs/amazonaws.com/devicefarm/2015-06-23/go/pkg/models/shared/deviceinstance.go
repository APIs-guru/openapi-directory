package shared

type DeviceInstance struct {
	Arn             *string             `json:"arn"`
	DeviceArn       *string             `json:"deviceArn"`
	InstanceProfile *InstanceProfile    `json:"instanceProfile"`
	Labels          []string            `json:"labels"`
	Status          *InstanceStatusEnum `json:"status"`
	Udid            *string             `json:"udid"`
}
