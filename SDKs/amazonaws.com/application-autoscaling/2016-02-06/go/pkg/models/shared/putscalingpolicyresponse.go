package shared

type PutScalingPolicyResponse struct {
	Alarms    []Alarm `json:"Alarms"`
	PolicyArn string  `json:"PolicyARN"`
}
