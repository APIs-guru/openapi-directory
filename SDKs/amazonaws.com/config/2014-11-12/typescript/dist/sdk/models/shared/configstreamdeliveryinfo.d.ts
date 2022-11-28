import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
/**
 * A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
**/
export declare class ConfigStreamDeliveryInfo extends SpeakeasyBase {
    lastErrorCode?: string;
    lastErrorMessage?: string;
    lastStatus?: DeliveryStatusEnum;
    lastStatusChangeTime?: Date;
}
