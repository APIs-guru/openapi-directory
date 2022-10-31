package shared



type SyncConfig struct {
    ConflictDetection *ConflictDetectionTypeEnum `json:"conflictDetection,omitempty"`
    ConflictHandler *ConflictHandlerTypeEnum `json:"conflictHandler,omitempty"`
    LambdaConflictHandlerConfig *LambdaConflictHandlerConfig `json:"lambdaConflictHandlerConfig,omitempty"`
    
}

