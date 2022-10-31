package shared



type QueryExecutionStatistics struct {
    DataManifestLocation *string `json:"DataManifestLocation,omitempty"`
    DataScannedInBytes *int64 `json:"DataScannedInBytes,omitempty"`
    EngineExecutionTimeInMillis *int64 `json:"EngineExecutionTimeInMillis,omitempty"`
    QueryPlanningTimeInMillis *int64 `json:"QueryPlanningTimeInMillis,omitempty"`
    QueryQueueTimeInMillis *int64 `json:"QueryQueueTimeInMillis,omitempty"`
    ServiceProcessingTimeInMillis *int64 `json:"ServiceProcessingTimeInMillis,omitempty"`
    TotalExecutionTimeInMillis *int64 `json:"TotalExecutionTimeInMillis,omitempty"`
    
}

