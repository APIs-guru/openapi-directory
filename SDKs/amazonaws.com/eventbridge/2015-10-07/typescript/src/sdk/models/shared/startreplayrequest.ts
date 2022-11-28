import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplayDestination } from "./replaydestination";



export class StartReplayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: ReplayDestination;

  @SpeakeasyMetadata({ data: "json, name=EventEndTime" })
  eventEndTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=EventStartTime" })
  eventStartTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplayName" })
  replayName: string;
}
