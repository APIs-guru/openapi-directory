import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImageRecipeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
