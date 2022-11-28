import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplayStateEnum } from "./replaystateenum";



export class CancelReplayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplayArn" })
  replayArn?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ReplayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
