package shared

type CreateMlTransformRequest struct {
	Description         *string              `json:"Description"`
	GlueVersion         *string              `json:"GlueVersion"`
	InputRecordTables   []GlueTable          `json:"InputRecordTables"`
	MaxCapacity         *float64             `json:"MaxCapacity"`
	MaxRetries          *int64               `json:"MaxRetries"`
	Name                string               `json:"Name"`
	NumberOfWorkers     *int64               `json:"NumberOfWorkers"`
	Parameters          TransformParameters  `json:"Parameters"`
	Role                string               `json:"Role"`
	Tags                map[string]string    `json:"Tags"`
	Timeout             *int64               `json:"Timeout"`
	TransformEncryption *TransformEncryption `json:"TransformEncryption"`
	WorkerType          *WorkerTypeEnum      `json:"WorkerType"`
}
