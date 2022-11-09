import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";


// CodeDeliveryDetailsType
/** 
 * The code delivery details being returned from the server.
**/
export class CodeDeliveryDetailsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=DeliveryMedium" })
  deliveryMedium?: DeliveryMediumTypeEnum;

  @Metadata({ data: "json, name=Destination" })
  destination?: string;
}
