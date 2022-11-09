import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageBuildVersionArn" })
  imageBuildVersionArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
