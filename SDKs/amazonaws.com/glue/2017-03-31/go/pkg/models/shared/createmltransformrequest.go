package shared



type CreateMlTransformRequest struct {
    Description *string `json:"Description,omitempty"`
    GlueVersion *string `json:"GlueVersion,omitempty"`
    InputRecordTables []GlueTable `json:"InputRecordTables"`
    MaxCapacity *float64 `json:"MaxCapacity,omitempty"`
    MaxRetries *int64 `json:"MaxRetries,omitempty"`
    Name string `json:"Name"`
    NumberOfWorkers *int64 `json:"NumberOfWorkers,omitempty"`
    Parameters TransformParameters `json:"Parameters"`
    Role string `json:"Role"`
    Tags map[string]string `json:"Tags,omitempty"`
    Timeout *int64 `json:"Timeout,omitempty"`
    TransformEncryption *TransformEncryption `json:"TransformEncryption,omitempty"`
    WorkerType *WorkerTypeEnum `json:"WorkerType,omitempty"`
    
}

