package shared

import (
	"time"
)

type AuditSuppression struct {
	CheckName            string             `json:"checkName"`
	Description          *string            `json:"description"`
	ExpirationDate       *time.Time         `json:"expirationDate"`
	ResourceIdentifier   ResourceIdentifier `json:"resourceIdentifier"`
	SuppressIndefinitely *bool              `json:"suppressIndefinitely"`
}
