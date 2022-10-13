package shared

type AssessmentFramework struct {
	Arn         *string                `json:"arn"`
	ControlSets []AssessmentControlSet `json:"controlSets"`
	ID          *string                `json:"id"`
	Metadata    *FrameworkMetadata     `json:"metadata"`
}
