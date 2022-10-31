package shared

import (
"time")

type AssessmentMetadata struct {
    AssessmentReportsDestination *AssessmentReportsDestination `json:"assessmentReportsDestination,omitempty"`
    ComplianceType *string `json:"complianceType,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Delegations []Delegation `json:"delegations,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    Name *string `json:"name,omitempty"`
    Roles []Role `json:"roles,omitempty"`
    Scope *Scope `json:"scope,omitempty"`
    Status *AssessmentStatusEnum `json:"status,omitempty"`
    
}

