import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelReplayRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplayName" })
  replayName: string;
}
