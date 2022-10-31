package shared

type PipelineExecutionStartConditionEnum string

const (
	PipelineExecutionStartConditionEnumExpressionMatchOnly                          PipelineExecutionStartConditionEnum = "EXPRESSION_MATCH_ONLY"
	PipelineExecutionStartConditionEnumExpressionMatchAndDependencyUpdatesAvailable PipelineExecutionStartConditionEnum = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE"
)
