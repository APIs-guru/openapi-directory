package shared

import (
	"time"
)

type ExternalEvaluation struct {
	Annotation             *string            `json:"Annotation"`
	ComplianceResourceID   string             `json:"ComplianceResourceId"`
	ComplianceResourceType string             `json:"ComplianceResourceType"`
	ComplianceType         ComplianceTypeEnum `json:"ComplianceType"`
	OrderingTimestamp      time.Time          `json:"OrderingTimestamp"`
}
