import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Replay } from "./replay";
export declare class ListReplaysResponse extends SpeakeasyBase {
    nextToken?: string;
    replays?: Replay[];
}
