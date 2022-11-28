import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A partition dimension defined by a timestamp attribute.
**/
export declare class TimestampPartition extends SpeakeasyBase {
    attributeName: string;
    timestampFormat?: string;
}
