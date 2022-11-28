import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeSummary } from "./eventtypesummary";
export declare class ListEventTypesResult extends SpeakeasyBase {
    eventTypes?: EventTypeSummary[];
    nextToken?: string;
}
