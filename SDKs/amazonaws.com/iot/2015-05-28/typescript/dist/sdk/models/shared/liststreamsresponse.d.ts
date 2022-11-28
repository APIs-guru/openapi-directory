import { SpeakeasyBase } from "../../../internal/utils";
import { StreamSummary } from "./streamsummary";
export declare class ListStreamsResponse extends SpeakeasyBase {
    nextToken?: string;
    streams?: StreamSummary[];
}
