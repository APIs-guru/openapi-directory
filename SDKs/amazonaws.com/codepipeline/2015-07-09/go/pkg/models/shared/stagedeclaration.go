package shared

type StageDeclaration struct {
	Actions  []ActionDeclaration  `json:"actions"`
	Blockers []BlockerDeclaration `json:"blockers,omitempty"`
	Name     string               `json:"name"`
}
