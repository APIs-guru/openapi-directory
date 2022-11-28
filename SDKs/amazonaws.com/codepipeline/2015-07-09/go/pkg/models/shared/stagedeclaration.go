package shared

// StageDeclaration
// Represents information about a stage and its definition.
type StageDeclaration struct {
	Actions  []ActionDeclaration  `json:"actions"`
	Blockers []BlockerDeclaration `json:"blockers,omitempty"`
	Name     string               `json:"name"`
}
