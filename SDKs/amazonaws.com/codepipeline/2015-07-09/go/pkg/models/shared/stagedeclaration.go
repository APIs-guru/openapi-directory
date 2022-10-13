package shared

type StageDeclaration struct {
	Actions  []ActionDeclaration  `json:"actions"`
	Blockers []BlockerDeclaration `json:"blockers"`
	Name     string               `json:"name"`
}
