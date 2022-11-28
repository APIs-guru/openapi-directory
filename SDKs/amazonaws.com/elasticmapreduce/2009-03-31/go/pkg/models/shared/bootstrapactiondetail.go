package shared

// BootstrapActionDetail
// Reports the configuration of a bootstrap action in a cluster (job flow).
type BootstrapActionDetail struct {
	BootstrapActionConfig *BootstrapActionConfig `json:"BootstrapActionConfig,omitempty"`
}
