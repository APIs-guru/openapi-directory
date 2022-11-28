import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentBuildVersionArn" })
  componentBuildVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
