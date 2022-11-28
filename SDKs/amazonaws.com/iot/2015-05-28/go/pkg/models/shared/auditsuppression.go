package shared

import (
	"time"
)

// AuditSuppression
//
//	Filters out specific findings of a Device Defender audit.
type AuditSuppression struct {
	CheckName            string             `json:"checkName"`
	Description          *string            `json:"description,omitempty"`
	ExpirationDate       *time.Time         `json:"expirationDate,omitempty"`
	ResourceIdentifier   ResourceIdentifier `json:"resourceIdentifier"`
	SuppressIndefinitely *bool              `json:"suppressIndefinitely,omitempty"`
}
