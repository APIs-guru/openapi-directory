import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplayStateEnum } from "./replaystateenum";



// Replay
/** 
 * A <code>Replay</code> object that contains details about a replay.
**/
export class Replay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventEndTime" })
  eventEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventLastReplayedTime" })
  eventLastReplayedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EventStartTime" })
  eventStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplayEndTime" })
  replayEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplayName" })
  replayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplayStartTime" })
  replayStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ReplayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
