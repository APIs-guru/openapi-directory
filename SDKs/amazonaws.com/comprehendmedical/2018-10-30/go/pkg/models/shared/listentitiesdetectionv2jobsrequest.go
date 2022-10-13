package shared

type ListEntitiesDetectionV2JobsRequest struct {
	Filter     *ComprehendMedicalAsyncJobFilter `json:"Filter"`
	MaxResults *int64                           `json:"MaxResults"`
	NextToken  *string                          `json:"NextToken"`
}
