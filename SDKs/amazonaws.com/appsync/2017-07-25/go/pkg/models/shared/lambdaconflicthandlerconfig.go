package shared

// LambdaConflictHandlerConfig
// The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
type LambdaConflictHandlerConfig struct {
	LambdaConflictHandlerArn *string `json:"lambdaConflictHandlerArn,omitempty"`
}
