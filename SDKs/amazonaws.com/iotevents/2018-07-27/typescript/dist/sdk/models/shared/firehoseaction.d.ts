import { SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";
/**
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
**/
export declare class FirehoseAction extends SpeakeasyBase {
    deliveryStreamName: string;
    payload?: Payload;
    separator?: string;
}
