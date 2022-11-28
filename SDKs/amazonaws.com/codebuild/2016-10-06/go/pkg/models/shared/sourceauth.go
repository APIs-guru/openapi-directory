package shared

// SourceAuth
// <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>
type SourceAuth struct {
	Resource *string            `json:"resource,omitempty"`
	Type     SourceAuthTypeEnum `json:"type"`
}
