package shared

type ListOtaUpdatesResponse struct {
	NextToken  *string            `json:"nextToken"`
	OtaUpdates []OtaUpdateSummary `json:"otaUpdates"`
}
