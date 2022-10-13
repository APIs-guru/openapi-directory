package shared

type SourceAuth struct {
	Resource *string            `json:"resource"`
	Type     SourceAuthTypeEnum `json:"type"`
}
