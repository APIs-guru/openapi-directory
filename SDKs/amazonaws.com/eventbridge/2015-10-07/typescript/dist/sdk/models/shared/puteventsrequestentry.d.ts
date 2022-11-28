import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an event to be submitted.
**/
export declare class PutEventsRequestEntry extends SpeakeasyBase {
    detail?: string;
    detailType?: string;
    eventBusName?: string;
    resources?: string[];
    source?: string;
    time?: Date;
    traceHeader?: string;
}
