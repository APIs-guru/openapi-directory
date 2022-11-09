import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageRecipe } from "./imagerecipe";


export class GetImageRecipeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageRecipe" })
  imageRecipe?: ImageRecipe;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
