import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTestGridSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionArn" })
  sessionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
