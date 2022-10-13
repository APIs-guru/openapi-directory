package shared

type ProjectSource struct {
	Auth                *SourceAuth          `json:"auth"`
	BuildStatusConfig   *BuildStatusConfig   `json:"buildStatusConfig"`
	Buildspec           *string              `json:"buildspec"`
	GitCloneDepth       *int64               `json:"gitCloneDepth"`
	GitSubmodulesConfig *GitSubmodulesConfig `json:"gitSubmodulesConfig"`
	InsecureSsl         *bool                `json:"insecureSsl"`
	Location            *string              `json:"location"`
	ReportBuildStatus   *bool                `json:"reportBuildStatus"`
	SourceIdentifier    *string              `json:"sourceIdentifier"`
	Type                SourceTypeEnum       `json:"type"`
}
