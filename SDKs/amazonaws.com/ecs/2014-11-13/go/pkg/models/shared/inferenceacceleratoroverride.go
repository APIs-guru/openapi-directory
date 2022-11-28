package shared

// InferenceAcceleratorOverride
// Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
type InferenceAcceleratorOverride struct {
	DeviceName *string `json:"deviceName,omitempty"`
	DeviceType *string `json:"deviceType,omitempty"`
}
