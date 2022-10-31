package shared

type BlockerDeclaration struct {
	Name string          `json:"name"`
	Type BlockerTypeEnum `json:"type"`
}
