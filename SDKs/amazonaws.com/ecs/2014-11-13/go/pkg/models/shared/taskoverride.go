package shared

type TaskOverride struct {
	ContainerOverrides            []ContainerOverride            `json:"containerOverrides"`
	CPU                           *string                        `json:"cpu"`
	EphemeralStorage              *EphemeralStorage              `json:"ephemeralStorage"`
	ExecutionRoleArn              *string                        `json:"executionRoleArn"`
	InferenceAcceleratorOverrides []InferenceAcceleratorOverride `json:"inferenceAcceleratorOverrides"`
	Memory                        *string                        `json:"memory"`
	TaskRoleArn                   *string                        `json:"taskRoleArn"`
}
