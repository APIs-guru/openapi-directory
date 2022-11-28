package shared

// AssessmentControl
//
//	The control entity that represents a standard or custom control used in an Audit Manager assessment.
type AssessmentControl struct {
	AssessmentReportEvidenceCount *int64               `json:"assessmentReportEvidenceCount,omitempty"`
	Comments                      []ControlComment     `json:"comments,omitempty"`
	Description                   *string              `json:"description,omitempty"`
	EvidenceCount                 *int64               `json:"evidenceCount,omitempty"`
	EvidenceSources               []string             `json:"evidenceSources,omitempty"`
	ID                            *string              `json:"id,omitempty"`
	Name                          *string              `json:"name,omitempty"`
	Response                      *ControlResponseEnum `json:"response,omitempty"`
	Status                        *ControlStatusEnum   `json:"status,omitempty"`
}
