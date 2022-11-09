import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";


// ConfigExportDeliveryInfo
/** 
 * Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
**/
export class ConfigExportDeliveryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastAttemptTime" })
  lastAttemptTime?: Date;

  @Metadata({ data: "json, name=lastErrorCode" })
  lastErrorCode?: string;

  @Metadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: string;

  @Metadata({ data: "json, name=lastStatus" })
  lastStatus?: DeliveryStatusEnum;

  @Metadata({ data: "json, name=lastSuccessfulTime" })
  lastSuccessfulTime?: Date;

  @Metadata({ data: "json, name=nextDeliveryTime" })
  nextDeliveryTime?: Date;
}
