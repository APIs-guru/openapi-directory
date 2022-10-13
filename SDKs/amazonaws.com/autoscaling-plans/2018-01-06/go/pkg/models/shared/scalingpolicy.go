package shared

type ScalingPolicy struct {
	PolicyName                  string                       `json:"PolicyName"`
	PolicyType                  PolicyTypeEnum               `json:"PolicyType"`
	TargetTrackingConfiguration *TargetTrackingConfiguration `json:"TargetTrackingConfiguration"`
}
