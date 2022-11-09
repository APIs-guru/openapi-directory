import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayStateEnum } from "./replaystateenum";
export declare class StartReplayResponse extends SpeakeasyBase {
    replayArn?: string;
    replayStartTime?: Date;
    state?: ReplayStateEnum;
    stateReason?: string;
}
