import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateContainerRecipeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
