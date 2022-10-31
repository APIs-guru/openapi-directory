package shared

import (
"time")

type DescribeAuditSuppressionResponse struct {
    CheckName *string `json:"checkName,omitempty"`
    Description *string `json:"description,omitempty"`
    ExpirationDate *time.Time `json:"expirationDate,omitempty"`
    ResourceIdentifier *ResourceIdentifier `json:"resourceIdentifier,omitempty"`
    SuppressIndefinitely *bool `json:"suppressIndefinitely,omitempty"`
    
}

