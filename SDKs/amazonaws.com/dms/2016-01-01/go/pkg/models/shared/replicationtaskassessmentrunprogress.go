package shared

// ReplicationTaskAssessmentRunProgress
// The progress values reported by the <code>AssessmentProgress</code> response element.
type ReplicationTaskAssessmentRunProgress struct {
	IndividualAssessmentCompletedCount *int64 `json:"IndividualAssessmentCompletedCount,omitempty"`
	IndividualAssessmentCount          *int64 `json:"IndividualAssessmentCount,omitempty"`
}
