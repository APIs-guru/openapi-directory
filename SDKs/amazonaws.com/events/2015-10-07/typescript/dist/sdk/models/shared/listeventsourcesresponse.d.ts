import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSource } from "./eventsource";
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    eventSources?: EventSource[];
    nextToken?: string;
}
