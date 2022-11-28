package shared

// InferenceAccelerator
// Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
type InferenceAccelerator struct {
	DeviceName string `json:"deviceName"`
	DeviceType string `json:"deviceType"`
}
