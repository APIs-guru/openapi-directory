package shared




type GeneratorRecipeCharacterSetsEnum string

const (
    GeneratorRecipeCharacterSetsEnumLetters GeneratorRecipeCharacterSetsEnum = "LETTERS"
GeneratorRecipeCharacterSetsEnumDigits GeneratorRecipeCharacterSetsEnum = "DIGITS"
GeneratorRecipeCharacterSetsEnumSymbols GeneratorRecipeCharacterSetsEnum = "SYMBOLS"
)


type GeneratorRecipe struct {
    CharacterSets []GeneratorRecipeCharacterSetsEnum `json:"characterSets,omitempty"`
    Length *int64 `json:"length,omitempty"`
    
}

