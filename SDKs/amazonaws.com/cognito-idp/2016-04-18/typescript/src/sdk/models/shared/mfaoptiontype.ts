import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";


// MfaOptionType
/** 
 *  <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
**/
export class MfaOptionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=DeliveryMedium" })
  deliveryMedium?: DeliveryMediumTypeEnum;
}
