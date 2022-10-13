package shared

type GetMlTaskRunsResponse struct {
	NextToken *string   `json:"NextToken"`
	TaskRuns  []TaskRun `json:"TaskRuns"`
}
