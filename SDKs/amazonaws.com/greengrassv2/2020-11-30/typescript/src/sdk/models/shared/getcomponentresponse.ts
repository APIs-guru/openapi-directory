import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecipeOutputFormatEnum } from "./recipeoutputformatenum";


export class GetComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recipe" })
  recipe: string;

  @Metadata({ data: "json, name=recipeOutputFormat" })
  recipeOutputFormat: RecipeOutputFormatEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
