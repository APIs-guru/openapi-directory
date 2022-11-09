import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateImageRecipeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
