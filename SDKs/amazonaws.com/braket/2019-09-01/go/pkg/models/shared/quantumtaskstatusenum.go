package shared

type QuantumTaskStatusEnum string

const (
	QuantumTaskStatusEnumCreated    QuantumTaskStatusEnum = "CREATED"
	QuantumTaskStatusEnumQueued     QuantumTaskStatusEnum = "QUEUED"
	QuantumTaskStatusEnumRunning    QuantumTaskStatusEnum = "RUNNING"
	QuantumTaskStatusEnumCompleted  QuantumTaskStatusEnum = "COMPLETED"
	QuantumTaskStatusEnumFailed     QuantumTaskStatusEnum = "FAILED"
	QuantumTaskStatusEnumCancelling QuantumTaskStatusEnum = "CANCELLING"
	QuantumTaskStatusEnumCancelled  QuantumTaskStatusEnum = "CANCELLED"
)
