package shared

import (
	"time"
)

type MlTransform struct {
	CreatedOn           *time.Time               `json:"CreatedOn,omitempty"`
	Description         *string                  `json:"Description,omitempty"`
	EvaluationMetrics   *EvaluationMetrics       `json:"EvaluationMetrics,omitempty"`
	GlueVersion         *string                  `json:"GlueVersion,omitempty"`
	InputRecordTables   []GlueTable              `json:"InputRecordTables,omitempty"`
	LabelCount          *int64                   `json:"LabelCount,omitempty"`
	LastModifiedOn      *time.Time               `json:"LastModifiedOn,omitempty"`
	MaxCapacity         *float64                 `json:"MaxCapacity,omitempty"`
	MaxRetries          *int64                   `json:"MaxRetries,omitempty"`
	Name                *string                  `json:"Name,omitempty"`
	NumberOfWorkers     *int64                   `json:"NumberOfWorkers,omitempty"`
	Parameters          *TransformParameters     `json:"Parameters,omitempty"`
	Role                *string                  `json:"Role,omitempty"`
	Schema              []SchemaColumn           `json:"Schema,omitempty"`
	Status              *TransformStatusTypeEnum `json:"Status,omitempty"`
	Timeout             *int64                   `json:"Timeout,omitempty"`
	TransformEncryption *TransformEncryption     `json:"TransformEncryption,omitempty"`
	TransformID         *string                  `json:"TransformId,omitempty"`
	WorkerType          *WorkerTypeEnum          `json:"WorkerType,omitempty"`
}
