import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";



// ConfigStreamDeliveryInfo
/** 
 * A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
**/
export class ConfigStreamDeliveryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastErrorCode" })
  lastErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatus" })
  lastStatus?: DeliveryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastStatusChangeTime" })
  lastStatusChangeTime?: Date;
}
