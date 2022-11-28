import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExpireSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId: string;
}
