package shared

type ProjectSource struct {
	Auth                *SourceAuth          `json:"auth,omitempty"`
	BuildStatusConfig   *BuildStatusConfig   `json:"buildStatusConfig,omitempty"`
	Buildspec           *string              `json:"buildspec,omitempty"`
	GitCloneDepth       *int64               `json:"gitCloneDepth,omitempty"`
	GitSubmodulesConfig *GitSubmodulesConfig `json:"gitSubmodulesConfig,omitempty"`
	InsecureSsl         *bool                `json:"insecureSsl,omitempty"`
	Location            *string              `json:"location,omitempty"`
	ReportBuildStatus   *bool                `json:"reportBuildStatus,omitempty"`
	SourceIdentifier    *string              `json:"sourceIdentifier,omitempty"`
	Type                SourceTypeEnum       `json:"type"`
}
