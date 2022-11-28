package shared

import (
	"time"
)

// ExternalEvaluation
// Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
type ExternalEvaluation struct {
	Annotation             *string            `json:"Annotation,omitempty"`
	ComplianceResourceID   string             `json:"ComplianceResourceId"`
	ComplianceResourceType string             `json:"ComplianceResourceType"`
	ComplianceType         ComplianceTypeEnum `json:"ComplianceType"`
	OrderingTimestamp      time.Time          `json:"OrderingTimestamp"`
}
