import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayDestination } from "./replaydestination";


export class StartReplayRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Destination" })
  destination: ReplayDestination;

  @Metadata({ data: "json, name=EventEndTime" })
  eventEndTime: Date;

  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn: string;

  @Metadata({ data: "json, name=EventStartTime" })
  eventStartTime: Date;

  @Metadata({ data: "json, name=ReplayName" })
  replayName: string;
}
