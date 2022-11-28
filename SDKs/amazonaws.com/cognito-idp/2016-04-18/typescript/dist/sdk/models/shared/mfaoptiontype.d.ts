import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
/**
 *  <i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
**/
export declare class MfaOptionType extends SpeakeasyBase {
    attributeName?: string;
    deliveryMedium?: DeliveryMediumTypeEnum;
}
