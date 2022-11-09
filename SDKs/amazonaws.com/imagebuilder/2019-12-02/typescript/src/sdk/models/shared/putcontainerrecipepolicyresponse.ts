import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutContainerRecipePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
