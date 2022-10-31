package shared



type ReactiveInsight struct {
    ID *string `json:"Id,omitempty"`
    InsightTimeRange *InsightTimeRange `json:"InsightTimeRange,omitempty"`
    Name *string `json:"Name,omitempty"`
    ResourceCollection *ResourceCollection `json:"ResourceCollection,omitempty"`
    Severity *InsightSeverityEnum `json:"Severity,omitempty"`
    SsmOpsItemID *string `json:"SsmOpsItemId,omitempty"`
    Status *InsightStatusEnum `json:"Status,omitempty"`
    
}

