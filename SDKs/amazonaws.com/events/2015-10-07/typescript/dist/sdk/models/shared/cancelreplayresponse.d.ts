import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayStateEnum } from "./replaystateenum";
export declare class CancelReplayResponse extends SpeakeasyBase {
    replayArn?: string;
    state?: ReplayStateEnum;
    stateReason?: string;
}
