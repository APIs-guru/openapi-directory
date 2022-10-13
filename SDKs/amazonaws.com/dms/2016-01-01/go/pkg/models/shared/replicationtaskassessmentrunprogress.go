package shared

type ReplicationTaskAssessmentRunProgress struct {
	IndividualAssessmentCompletedCount *int64 `json:"IndividualAssessmentCompletedCount"`
	IndividualAssessmentCount          *int64 `json:"IndividualAssessmentCount"`
}
