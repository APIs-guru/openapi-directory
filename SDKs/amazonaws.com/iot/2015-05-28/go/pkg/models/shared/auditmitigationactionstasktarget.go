package shared

type AuditMitigationActionsTaskTarget struct {
	AuditCheckToReasonCodeFilter map[string][]string `json:"auditCheckToReasonCodeFilter"`
	AuditTaskID                  *string             `json:"auditTaskId"`
	FindingIds                   []string            `json:"findingIds"`
}
