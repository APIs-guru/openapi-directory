package shared

// RawString
// A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead.
type RawString struct {
	Content *string `json:"content,omitempty"`
	Sha256  *string `json:"sha256,omitempty"`
}
