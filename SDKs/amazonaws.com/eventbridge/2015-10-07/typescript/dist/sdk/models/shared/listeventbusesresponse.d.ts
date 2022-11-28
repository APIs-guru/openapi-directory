import { SpeakeasyBase } from "../../../internal/utils";
import { EventBus } from "./eventbus";
export declare class ListEventBusesResponse extends SpeakeasyBase {
    eventBuses?: EventBus[];
    nextToken?: string;
}
