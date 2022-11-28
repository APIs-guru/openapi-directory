import { SpeakeasyBase } from "../../../internal/utils";
import { ReplayStateEnum } from "./replaystateenum";
export declare class ListReplaysRequest extends SpeakeasyBase {
    eventSourceArn?: string;
    limit?: number;
    namePrefix?: string;
    nextToken?: string;
    state?: ReplayStateEnum;
}
