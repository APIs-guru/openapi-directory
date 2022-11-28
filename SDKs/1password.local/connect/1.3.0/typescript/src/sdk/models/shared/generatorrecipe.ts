import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GeneratorRecipeCharacterSetsEnum {
    Letters = "LETTERS",
    Digits = "DIGITS",
    Symbols = "SYMBOLS"
}


// GeneratorRecipe
/** 
 * The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
**/
export class GeneratorRecipe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterSets" })
  characterSets?: GeneratorRecipeCharacterSetsEnum[];

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;
}
