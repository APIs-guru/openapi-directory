package shared

type CrossRegionCopyRule struct {
	CmkArn        *string                       `json:"CmkArn,omitempty"`
	CopyTags      *bool                         `json:"CopyTags,omitempty"`
	DeprecateRule *CrossRegionCopyDeprecateRule `json:"DeprecateRule,omitempty"`
	Encrypted     bool                          `json:"Encrypted"`
	RetainRule    *CrossRegionCopyRetainRule    `json:"RetainRule,omitempty"`
	Target        *string                       `json:"Target,omitempty"`
	TargetRegion  *string                       `json:"TargetRegion,omitempty"`
}
