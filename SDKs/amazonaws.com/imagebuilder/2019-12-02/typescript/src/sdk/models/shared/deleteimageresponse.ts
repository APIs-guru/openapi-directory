import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageBuildVersionArn" })
  imageBuildVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
