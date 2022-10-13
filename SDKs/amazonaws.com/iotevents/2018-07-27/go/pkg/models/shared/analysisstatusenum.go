package shared

type AnalysisStatusEnum string

const (
	AnalysisStatusEnumRunning  AnalysisStatusEnum = "RUNNING"
	AnalysisStatusEnumComplete AnalysisStatusEnum = "COMPLETE"
	AnalysisStatusEnumFailed   AnalysisStatusEnum = "FAILED"
)
