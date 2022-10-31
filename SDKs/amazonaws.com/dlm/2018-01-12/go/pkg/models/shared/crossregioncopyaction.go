package shared

type CrossRegionCopyAction struct {
	EncryptionConfiguration EncryptionConfiguration    `json:"EncryptionConfiguration"`
	RetainRule              *CrossRegionCopyRetainRule `json:"RetainRule,omitempty"`
	Target                  string                     `json:"Target"`
}
