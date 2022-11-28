import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutImageRecipePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
