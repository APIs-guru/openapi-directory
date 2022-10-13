package shared

type Type struct {
	Arn         *string                   `json:"arn"`
	Definition  *string                   `json:"definition"`
	Description *string                   `json:"description"`
	Format      *TypeDefinitionFormatEnum `json:"format"`
	Name        *string                   `json:"name"`
}
