package shared

import (
	"time"
)

type GetMlTransformResponse struct {
	CreatedOn           *time.Time               `json:"CreatedOn"`
	Description         *string                  `json:"Description"`
	EvaluationMetrics   *EvaluationMetrics       `json:"EvaluationMetrics"`
	GlueVersion         *string                  `json:"GlueVersion"`
	InputRecordTables   []GlueTable              `json:"InputRecordTables"`
	LabelCount          *int64                   `json:"LabelCount"`
	LastModifiedOn      *time.Time               `json:"LastModifiedOn"`
	MaxCapacity         *float64                 `json:"MaxCapacity"`
	MaxRetries          *int64                   `json:"MaxRetries"`
	Name                *string                  `json:"Name"`
	NumberOfWorkers     *int64                   `json:"NumberOfWorkers"`
	Parameters          *TransformParameters     `json:"Parameters"`
	Role                *string                  `json:"Role"`
	Schema              []SchemaColumn           `json:"Schema"`
	Status              *TransformStatusTypeEnum `json:"Status"`
	Timeout             *int64                   `json:"Timeout"`
	TransformEncryption *TransformEncryption     `json:"TransformEncryption"`
	TransformID         *string                  `json:"TransformId"`
	WorkerType          *WorkerTypeEnum          `json:"WorkerType"`
}
