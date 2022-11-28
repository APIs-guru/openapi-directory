import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContainerRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
