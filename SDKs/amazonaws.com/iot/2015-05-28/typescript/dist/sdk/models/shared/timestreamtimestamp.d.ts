import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
**/
export declare class TimestreamTimestamp extends SpeakeasyBase {
    unit: string;
    value: string;
}
