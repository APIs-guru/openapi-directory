package shared

// DebugSession
// Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.
type DebugSession struct {
	SessionEnabled *bool   `json:"sessionEnabled,omitempty"`
	SessionTarget  *string `json:"sessionTarget,omitempty"`
}
