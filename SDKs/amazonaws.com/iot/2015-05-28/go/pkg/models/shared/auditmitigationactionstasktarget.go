package shared

// AuditMitigationActionsTaskTarget
// Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
type AuditMitigationActionsTaskTarget struct {
	AuditCheckToReasonCodeFilter map[string][]string `json:"auditCheckToReasonCodeFilter,omitempty"`
	AuditTaskID                  *string             `json:"auditTaskId,omitempty"`
	FindingIds                   []string            `json:"findingIds,omitempty"`
}
