import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateContainerRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
