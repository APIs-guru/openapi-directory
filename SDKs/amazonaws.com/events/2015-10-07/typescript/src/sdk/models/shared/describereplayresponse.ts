import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayDestination } from "./replaydestination";
import { ReplayStateEnum } from "./replaystateenum";


export class DescribeReplayResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Destination" })
  destination?: ReplayDestination;

  @Metadata({ data: "json, name=EventEndTime" })
  eventEndTime?: Date;

  @Metadata({ data: "json, name=EventLastReplayedTime" })
  eventLastReplayedTime?: Date;

  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @Metadata({ data: "json, name=EventStartTime" })
  eventStartTime?: Date;

  @Metadata({ data: "json, name=ReplayArn" })
  replayArn?: string;

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
