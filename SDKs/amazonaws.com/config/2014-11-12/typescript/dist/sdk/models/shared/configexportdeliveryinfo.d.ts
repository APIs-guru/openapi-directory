import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
/**
 * Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
**/
export declare class ConfigExportDeliveryInfo extends SpeakeasyBase {
    lastAttemptTime?: Date;
    lastErrorCode?: string;
    lastErrorMessage?: string;
    lastStatus?: DeliveryStatusEnum;
    lastSuccessfulTime?: Date;
    nextDeliveryTime?: Date;
}
