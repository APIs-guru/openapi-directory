import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * The event integration.
**/
export declare class EventIntegration extends SpeakeasyBase {
    description?: string;
    eventBridgeBus?: string;
    eventFilter?: EventFilter;
    eventIntegrationArn?: string;
    name?: string;
    tags?: Map<string, string>;
}
