package shared

type AssessmentControl struct {
	AssessmentReportEvidenceCount *int64               `json:"assessmentReportEvidenceCount"`
	Comments                      []ControlComment     `json:"comments"`
	Description                   *string              `json:"description"`
	EvidenceCount                 *int64               `json:"evidenceCount"`
	EvidenceSources               []string             `json:"evidenceSources"`
	ID                            *string              `json:"id"`
	Name                          *string              `json:"name"`
	Response                      *ControlResponseEnum `json:"response"`
	Status                        *ControlStatusEnum   `json:"status"`
}
