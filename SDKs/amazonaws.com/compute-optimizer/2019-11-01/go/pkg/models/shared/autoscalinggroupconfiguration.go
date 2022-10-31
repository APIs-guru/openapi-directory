package shared



type AutoScalingGroupConfiguration struct {
    DesiredCapacity *int64 `json:"desiredCapacity,omitempty"`
    InstanceType *string `json:"instanceType,omitempty"`
    MaxSize *int64 `json:"maxSize,omitempty"`
    MinSize *int64 `json:"minSize,omitempty"`
    
}

