import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerRecipe } from "./containerrecipe";



export class GetContainerRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerRecipe" })
  containerRecipe?: ContainerRecipe;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
