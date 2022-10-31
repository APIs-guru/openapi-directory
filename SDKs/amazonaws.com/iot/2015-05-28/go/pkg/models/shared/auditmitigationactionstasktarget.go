package shared



type AuditMitigationActionsTaskTarget struct {
    AuditCheckToReasonCodeFilter map[string][]string `json:"auditCheckToReasonCodeFilter,omitempty"`
    AuditTaskID *string `json:"auditTaskId,omitempty"`
    FindingIds []string `json:"findingIds,omitempty"`
    
}

