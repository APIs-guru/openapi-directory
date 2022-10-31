package shared

type JobUpdate struct {
	AllocatedCapacity       *int64                `json:"AllocatedCapacity,omitempty"`
	Command                 *JobCommand           `json:"Command,omitempty"`
	Connections             *ConnectionsList      `json:"Connections,omitempty"`
	DefaultArguments        map[string]string     `json:"DefaultArguments,omitempty"`
	Description             *string               `json:"Description,omitempty"`
	ExecutionProperty       *ExecutionProperty    `json:"ExecutionProperty,omitempty"`
	GlueVersion             *string               `json:"GlueVersion,omitempty"`
	LogURI                  *string               `json:"LogUri,omitempty"`
	MaxCapacity             *float64              `json:"MaxCapacity,omitempty"`
	MaxRetries              *int64                `json:"MaxRetries,omitempty"`
	NonOverridableArguments map[string]string     `json:"NonOverridableArguments,omitempty"`
	NotificationProperty    *NotificationProperty `json:"NotificationProperty,omitempty"`
	NumberOfWorkers         *int64                `json:"NumberOfWorkers,omitempty"`
	Role                    *string               `json:"Role,omitempty"`
	SecurityConfiguration   *string               `json:"SecurityConfiguration,omitempty"`
	Timeout                 *int64                `json:"Timeout,omitempty"`
	WorkerType              *WorkerTypeEnum       `json:"WorkerType,omitempty"`
}
