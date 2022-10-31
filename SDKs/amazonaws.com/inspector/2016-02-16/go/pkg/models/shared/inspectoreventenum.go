package shared

type InspectorEventEnum string

const (
	InspectorEventEnumAssessmentRunStarted      InspectorEventEnum = "ASSESSMENT_RUN_STARTED"
	InspectorEventEnumAssessmentRunCompleted    InspectorEventEnum = "ASSESSMENT_RUN_COMPLETED"
	InspectorEventEnumAssessmentRunStateChanged InspectorEventEnum = "ASSESSMENT_RUN_STATE_CHANGED"
	InspectorEventEnumFindingReported           InspectorEventEnum = "FINDING_REPORTED"
	InspectorEventEnumOther                     InspectorEventEnum = "OTHER"
)
