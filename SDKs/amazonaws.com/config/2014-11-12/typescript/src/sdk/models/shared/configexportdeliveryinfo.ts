import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";



// ConfigExportDeliveryInfo
/** 
 * Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
**/
export class ConfigExportDeliveryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastAttemptTime" })
  lastAttemptTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastErrorCode" })
  lastErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatus" })
  lastStatus?: DeliveryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastSuccessfulTime" })
  lastSuccessfulTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=nextDeliveryTime" })
  nextDeliveryTime?: Date;
}
