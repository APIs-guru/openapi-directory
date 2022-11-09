import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerRecipe } from "./containerrecipe";


export class GetContainerRecipeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerRecipe" })
  containerRecipe?: ContainerRecipe;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
