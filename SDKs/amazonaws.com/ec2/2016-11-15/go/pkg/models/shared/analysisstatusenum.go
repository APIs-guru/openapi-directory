package shared

type AnalysisStatusEnum string

const (
	AnalysisStatusEnumRunning   AnalysisStatusEnum = "running"
	AnalysisStatusEnumSucceeded AnalysisStatusEnum = "succeeded"
	AnalysisStatusEnumFailed    AnalysisStatusEnum = "failed"
)
