package shared

// SyncConfig
// <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
type SyncConfig struct {
	ConflictDetection           *ConflictDetectionTypeEnum   `json:"conflictDetection,omitempty"`
	ConflictHandler             *ConflictHandlerTypeEnum     `json:"conflictHandler,omitempty"`
	LambdaConflictHandlerConfig *LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig,omitempty"`
}
