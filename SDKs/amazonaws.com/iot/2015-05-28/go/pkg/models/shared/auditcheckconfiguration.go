package shared

// AuditCheckConfiguration
// Which audit checks are enabled and disabled for this account.
type AuditCheckConfiguration struct {
	Enabled *bool `json:"enabled,omitempty"`
}
