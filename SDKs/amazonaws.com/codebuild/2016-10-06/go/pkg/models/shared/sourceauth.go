package shared

type SourceAuth struct {
	Resource *string            `json:"resource,omitempty"`
	Type     SourceAuthTypeEnum `json:"type"`
}
