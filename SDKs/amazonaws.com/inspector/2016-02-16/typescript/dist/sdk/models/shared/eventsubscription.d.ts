import { SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";
/**
 * This data type is used in the <a>Subscription</a> data type.
**/
export declare class EventSubscription extends SpeakeasyBase {
    event: InspectorEventEnum;
    subscribedAt: Date;
}
