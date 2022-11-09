import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayDestination } from "./replaydestination";
export declare class StartReplayRequest extends SpeakeasyBase {
    description?: string;
    destination: ReplayDestination;
    eventEndTime: Date;
    eventSourceArn: string;
    eventStartTime: Date;
    replayName: string;
}
