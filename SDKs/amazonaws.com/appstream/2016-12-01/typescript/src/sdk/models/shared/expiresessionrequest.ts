import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExpireSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionId" })
  sessionId: string;
}
