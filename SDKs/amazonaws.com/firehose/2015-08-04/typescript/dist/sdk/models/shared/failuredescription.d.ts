import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamFailureTypeEnum } from "./deliverystreamfailuretypeenum";
/**
 * Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.
**/
export declare class FailureDescription extends SpeakeasyBase {
    details: string;
    type: DeliveryStreamFailureTypeEnum;
}
