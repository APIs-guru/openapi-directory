package shared

// ScalingPolicy
// Represents a scaling policy.
type ScalingPolicy struct {
	PolicyName                  string                       `json:"PolicyName"`
	PolicyType                  PolicyTypeEnum               `json:"PolicyType"`
	TargetTrackingConfiguration *TargetTrackingConfiguration `json:"TargetTrackingConfiguration,omitempty"`
}
