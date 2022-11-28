import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStreamFailureTypeEnum } from "./deliverystreamfailuretypeenum";



// FailureDescription
/** 
 * Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.
**/
export class FailureDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: DeliveryStreamFailureTypeEnum;
}
