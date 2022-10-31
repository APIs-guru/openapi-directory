package shared



type PutScalingPolicyResponse struct {
    Alarms []Alarm `json:"Alarms,omitempty"`
    PolicyArn string `json:"PolicyARN"`
    
}

