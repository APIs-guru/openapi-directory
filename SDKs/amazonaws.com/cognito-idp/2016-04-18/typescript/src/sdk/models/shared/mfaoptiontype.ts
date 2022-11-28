import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";



// MfaOptionType
/** 
 *  <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
**/
export class MfaOptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryMedium" })
  deliveryMedium?: DeliveryMediumTypeEnum;
}
