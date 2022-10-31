package shared



type UpdateMlTransformRequest struct {
    Description *string `json:"Description,omitempty"`
    GlueVersion *string `json:"GlueVersion,omitempty"`
    MaxCapacity *float64 `json:"MaxCapacity,omitempty"`
    MaxRetries *int64 `json:"MaxRetries,omitempty"`
    Name *string `json:"Name,omitempty"`
    NumberOfWorkers *int64 `json:"NumberOfWorkers,omitempty"`
    Parameters *TransformParameters `json:"Parameters,omitempty"`
    Role *string `json:"Role,omitempty"`
    Timeout *int64 `json:"Timeout,omitempty"`
    TransformID string `json:"TransformId"`
    WorkerType *WorkerTypeEnum `json:"WorkerType,omitempty"`
    
}

