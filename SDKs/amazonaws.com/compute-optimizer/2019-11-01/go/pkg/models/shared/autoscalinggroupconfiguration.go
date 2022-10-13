package shared

type AutoScalingGroupConfiguration struct {
	DesiredCapacity *int64  `json:"desiredCapacity"`
	InstanceType    *string `json:"instanceType"`
	MaxSize         *int64  `json:"maxSize"`
	MinSize         *int64  `json:"minSize"`
}
