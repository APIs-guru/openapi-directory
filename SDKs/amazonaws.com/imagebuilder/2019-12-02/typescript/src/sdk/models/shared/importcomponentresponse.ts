import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=componentBuildVersionArn" })
  componentBuildVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
