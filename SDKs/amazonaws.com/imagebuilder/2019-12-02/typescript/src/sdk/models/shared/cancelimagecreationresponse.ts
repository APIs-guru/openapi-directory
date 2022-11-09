import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelImageCreationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=imageBuildVersionArn" })
  imageBuildVersionArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
