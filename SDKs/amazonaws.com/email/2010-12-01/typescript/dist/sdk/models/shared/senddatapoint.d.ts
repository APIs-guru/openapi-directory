import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity.
**/
export declare class SendDataPoint extends SpeakeasyBase {
    bounces?: number;
    complaints?: number;
    deliveryAttempts?: number;
    rejects?: number;
    timestamp?: Date;
}
