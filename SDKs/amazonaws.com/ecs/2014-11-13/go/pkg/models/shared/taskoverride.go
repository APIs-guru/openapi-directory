package shared

// TaskOverride
// The overrides associated with a task.
type TaskOverride struct {
	ContainerOverrides            []ContainerOverride            `json:"containerOverrides,omitempty"`
	CPU                           *string                        `json:"cpu,omitempty"`
	EphemeralStorage              *EphemeralStorage              `json:"ephemeralStorage,omitempty"`
	ExecutionRoleArn              *string                        `json:"executionRoleArn,omitempty"`
	InferenceAcceleratorOverrides []InferenceAcceleratorOverride `json:"inferenceAcceleratorOverrides,omitempty"`
	Memory                        *string                        `json:"memory,omitempty"`
	TaskRoleArn                   *string                        `json:"taskRoleArn,omitempty"`
}
