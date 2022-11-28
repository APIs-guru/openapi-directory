import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipeOutputFormatEnum } from "./recipeoutputformatenum";



export class GetComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe: string;

  @SpeakeasyMetadata({ data: "json, name=recipeOutputFormat" })
  recipeOutputFormat: RecipeOutputFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
