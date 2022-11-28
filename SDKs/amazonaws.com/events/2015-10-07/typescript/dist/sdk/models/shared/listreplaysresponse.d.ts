import { SpeakeasyBase } from "../../../internal/utils";
import { Replay } from "./replay";
export declare class ListReplaysResponse extends SpeakeasyBase {
    nextToken?: string;
    replays?: Replay[];
}
