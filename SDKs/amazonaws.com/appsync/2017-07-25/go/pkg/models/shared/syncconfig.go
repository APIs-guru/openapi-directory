package shared

type SyncConfig struct {
	ConflictDetection           *ConflictDetectionTypeEnum   `json:"conflictDetection"`
	ConflictHandler             *ConflictHandlerTypeEnum     `json:"conflictHandler"`
	LambdaConflictHandlerConfig *LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig"`
}
