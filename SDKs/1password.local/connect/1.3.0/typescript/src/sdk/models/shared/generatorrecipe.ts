import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GeneratorRecipeCharacterSetsEnum {
    Letters = "LETTERS"
,    Digits = "DIGITS"
,    Symbols = "SYMBOLS"
}


// GeneratorRecipe
/** 
 * The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
**/
export class GeneratorRecipe extends SpeakeasyBase {
  @Metadata({ data: "json, name=characterSets" })
  characterSets?: GeneratorRecipeCharacterSetsEnum[];

  @Metadata({ data: "json, name=length" })
  length?: number;
}
