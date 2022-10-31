package shared



type AuditCheckDetails struct {
    CheckCompliant *bool `json:"checkCompliant,omitempty"`
    CheckRunStatus *AuditCheckRunStatusEnum `json:"checkRunStatus,omitempty"`
    ErrorCode *string `json:"errorCode,omitempty"`
    Message *string `json:"message,omitempty"`
    NonCompliantResourcesCount *int64 `json:"nonCompliantResourcesCount,omitempty"`
    SuppressedNonCompliantResourcesCount *int64 `json:"suppressedNonCompliantResourcesCount,omitempty"`
    TotalResourcesCount *int64 `json:"totalResourcesCount,omitempty"`
    
}

