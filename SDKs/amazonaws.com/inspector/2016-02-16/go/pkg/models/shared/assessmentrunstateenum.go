package shared

type AssessmentRunStateEnum string

const (
	AssessmentRunStateEnumCreated                       AssessmentRunStateEnum = "CREATED"
	AssessmentRunStateEnumStartDataCollectionPending    AssessmentRunStateEnum = "START_DATA_COLLECTION_PENDING"
	AssessmentRunStateEnumStartDataCollectionInProgress AssessmentRunStateEnum = "START_DATA_COLLECTION_IN_PROGRESS"
	AssessmentRunStateEnumCollectingData                AssessmentRunStateEnum = "COLLECTING_DATA"
	AssessmentRunStateEnumStopDataCollectionPending     AssessmentRunStateEnum = "STOP_DATA_COLLECTION_PENDING"
	AssessmentRunStateEnumDataCollected                 AssessmentRunStateEnum = "DATA_COLLECTED"
	AssessmentRunStateEnumStartEvaluatingRulesPending   AssessmentRunStateEnum = "START_EVALUATING_RULES_PENDING"
	AssessmentRunStateEnumEvaluatingRules               AssessmentRunStateEnum = "EVALUATING_RULES"
	AssessmentRunStateEnumFailed                        AssessmentRunStateEnum = "FAILED"
	AssessmentRunStateEnumError                         AssessmentRunStateEnum = "ERROR"
	AssessmentRunStateEnumCompleted                     AssessmentRunStateEnum = "COMPLETED"
	AssessmentRunStateEnumCompletedWithErrors           AssessmentRunStateEnum = "COMPLETED_WITH_ERRORS"
	AssessmentRunStateEnumCanceled                      AssessmentRunStateEnum = "CANCELED"
)
