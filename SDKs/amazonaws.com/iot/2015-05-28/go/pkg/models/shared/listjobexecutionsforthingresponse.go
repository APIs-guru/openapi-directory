package shared

type ListJobExecutionsForThingResponse struct {
	ExecutionSummaries []JobExecutionSummaryForThing `json:"executionSummaries"`
	NextToken          *string                       `json:"nextToken"`
}
