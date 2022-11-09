import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayStateEnum } from "./replaystateenum";


// Replay
/** 
 * A <code>Replay</code> object that contains details about a replay.
**/
export class Replay extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventEndTime" })
  eventEndTime?: Date;

  @Metadata({ data: "json, name=EventLastReplayedTime" })
  eventLastReplayedTime?: Date;

  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @Metadata({ data: "json, name=EventStartTime" })
  eventStartTime?: Date;

  @Metadata({ data: "json, name=ReplayEndTime" })
  replayEndTime?: Date;

  @Metadata({ data: "json, name=ReplayName" })
  replayName?: string;

  @Metadata({ data: "json, name=ReplayStartTime" })
  replayStartTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: ReplayStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
