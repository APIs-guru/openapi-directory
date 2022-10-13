package shared

type QueryExecutionStatistics struct {
	DataManifestLocation          *string `json:"DataManifestLocation"`
	DataScannedInBytes            *int64  `json:"DataScannedInBytes"`
	EngineExecutionTimeInMillis   *int64  `json:"EngineExecutionTimeInMillis"`
	QueryPlanningTimeInMillis     *int64  `json:"QueryPlanningTimeInMillis"`
	QueryQueueTimeInMillis        *int64  `json:"QueryQueueTimeInMillis"`
	ServiceProcessingTimeInMillis *int64  `json:"ServiceProcessingTimeInMillis"`
	TotalExecutionTimeInMillis    *int64  `json:"TotalExecutionTimeInMillis"`
}
