package shared

// CrossRegionCopyAction
// Specifies a rule for copying shared snapshots across Regions.
type CrossRegionCopyAction struct {
	EncryptionConfiguration EncryptionConfiguration    `json:"EncryptionConfiguration"`
	RetainRule              *CrossRegionCopyRetainRule `json:"RetainRule,omitempty"`
	Target                  string                     `json:"Target"`
}
