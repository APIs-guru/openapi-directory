package shared

// BackendAPIConflictResolution
// Describes the conflict resolution configuration for your data model configured in your Amplify project.
type BackendAPIConflictResolution struct {
	ResolutionStrategy *ResolutionStrategyEnum `json:"ResolutionStrategy,omitempty"`
}
