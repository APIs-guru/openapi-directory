package shared

type CrossRegionCopyRule struct {
	CmkArn        *string                       `json:"CmkArn"`
	CopyTags      *bool                         `json:"CopyTags"`
	DeprecateRule *CrossRegionCopyDeprecateRule `json:"DeprecateRule"`
	Encrypted     bool                          `json:"Encrypted"`
	RetainRule    *CrossRegionCopyRetainRule    `json:"RetainRule"`
	Target        *string                       `json:"Target"`
	TargetRegion  *string                       `json:"TargetRegion"`
}
