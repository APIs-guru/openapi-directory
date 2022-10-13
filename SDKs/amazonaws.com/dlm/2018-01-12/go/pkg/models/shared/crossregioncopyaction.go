package shared

type CrossRegionCopyAction struct {
	EncryptionConfiguration EncryptionConfiguration    `json:"EncryptionConfiguration"`
	RetainRule              *CrossRegionCopyRetainRule `json:"RetainRule"`
	Target                  string                     `json:"Target"`
}
