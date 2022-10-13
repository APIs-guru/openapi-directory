package shared

type UpdateMlTransformRequest struct {
	Description     *string              `json:"Description"`
	GlueVersion     *string              `json:"GlueVersion"`
	MaxCapacity     *float64             `json:"MaxCapacity"`
	MaxRetries      *int64               `json:"MaxRetries"`
	Name            *string              `json:"Name"`
	NumberOfWorkers *int64               `json:"NumberOfWorkers"`
	Parameters      *TransformParameters `json:"Parameters"`
	Role            *string              `json:"Role"`
	Timeout         *int64               `json:"Timeout"`
	TransformID     string               `json:"TransformId"`
	WorkerType      *WorkerTypeEnum      `json:"WorkerType"`
}
