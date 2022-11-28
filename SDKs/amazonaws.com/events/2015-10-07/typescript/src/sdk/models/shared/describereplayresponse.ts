import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplayDestination } from "./replaydestination";
import { ReplayStateEnum } from "./replaystateenum";



export class DescribeReplayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: ReplayDestination;

  @SpeakeasyMetadata({ data: "json, name=EventEndTime" })
  eventEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventLastReplayedTime" })
  eventLastReplayedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EventStartTime" })
  eventStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplayArn" })
  replayArn?: string;

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
