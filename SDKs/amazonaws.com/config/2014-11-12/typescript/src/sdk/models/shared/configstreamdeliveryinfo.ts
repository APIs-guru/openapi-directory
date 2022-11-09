import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";


// ConfigStreamDeliveryInfo
/** 
 * A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
**/
export class ConfigStreamDeliveryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastErrorCode" })
  lastErrorCode?: string;

  @Metadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: string;

  @Metadata({ data: "json, name=lastStatus" })
  lastStatus?: DeliveryStatusEnum;

  @Metadata({ data: "json, name=lastStatusChangeTime" })
  lastStatusChangeTime?: Date;
}
