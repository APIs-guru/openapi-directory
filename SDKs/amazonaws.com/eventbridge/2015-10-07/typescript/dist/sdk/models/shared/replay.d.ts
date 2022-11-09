import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayStateEnum } from "./replaystateenum";
/**
 * A <code>Replay</code> object that contains details about a replay.
**/
export declare class Replay extends SpeakeasyBase {
    eventEndTime?: Date;
    eventLastReplayedTime?: Date;
    eventSourceArn?: string;
    eventStartTime?: Date;
    replayEndTime?: Date;
    replayName?: string;
    replayStartTime?: Date;
    state?: ReplayStateEnum;
    stateReason?: string;
}
