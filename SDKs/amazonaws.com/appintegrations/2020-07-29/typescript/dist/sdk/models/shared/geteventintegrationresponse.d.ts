import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
export declare class GetEventIntegrationResponse extends SpeakeasyBase {
    description?: string;
    eventBridgeBus?: string;
    eventFilter?: EventFilter;
    eventIntegrationArn?: string;
    name?: string;
    tags?: Map<string, string>;
}
