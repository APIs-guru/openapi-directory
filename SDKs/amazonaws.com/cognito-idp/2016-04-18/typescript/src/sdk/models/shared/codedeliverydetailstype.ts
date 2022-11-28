import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";



// CodeDeliveryDetailsType
/** 
 * The code delivery details being returned from the server.
**/
export class CodeDeliveryDetailsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryMedium" })
  deliveryMedium?: DeliveryMediumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: string;
}
