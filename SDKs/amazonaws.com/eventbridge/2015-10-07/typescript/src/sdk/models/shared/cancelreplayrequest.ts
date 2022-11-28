import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelReplayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplayName" })
  replayName: string;
}
