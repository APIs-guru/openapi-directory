package shared

// AssessmentFramework
//
//	The file used to structure and automate Audit Manager assessments for a given compliance standard.
type AssessmentFramework struct {
	Arn         *string                `json:"arn,omitempty"`
	ControlSets []AssessmentControlSet `json:"controlSets,omitempty"`
	ID          *string                `json:"id,omitempty"`
	Metadata    *FrameworkMetadata     `json:"metadata,omitempty"`
}
