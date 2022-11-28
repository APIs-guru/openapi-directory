import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageRecipe } from "./imagerecipe";



export class GetImageRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageRecipe" })
  imageRecipe?: ImageRecipe;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
