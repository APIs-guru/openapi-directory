package shared

type GeneratorRecipeCharacterSetsEnum string

const (
	GeneratorRecipeCharacterSetsEnumLetters GeneratorRecipeCharacterSetsEnum = "LETTERS"
	GeneratorRecipeCharacterSetsEnumDigits  GeneratorRecipeCharacterSetsEnum = "DIGITS"
	GeneratorRecipeCharacterSetsEnumSymbols GeneratorRecipeCharacterSetsEnum = "SYMBOLS"
)

// GeneratorRecipe
// The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
type GeneratorRecipe struct {
	CharacterSets []GeneratorRecipeCharacterSetsEnum `json:"characterSets,omitempty"`
	Length        *int64                             `json:"length,omitempty"`
}
