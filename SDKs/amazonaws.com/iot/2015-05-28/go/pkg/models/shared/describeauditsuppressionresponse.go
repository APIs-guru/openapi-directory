package shared

import (
	"time"
)

type DescribeAuditSuppressionResponse struct {
	CheckName            *string             `json:"checkName"`
	Description          *string             `json:"description"`
	ExpirationDate       *time.Time          `json:"expirationDate"`
	ResourceIdentifier   *ResourceIdentifier `json:"resourceIdentifier"`
	SuppressIndefinitely *bool               `json:"suppressIndefinitely"`
}
