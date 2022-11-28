import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
/**
 * The code delivery details being returned from the server.
**/
export declare class CodeDeliveryDetailsType extends SpeakeasyBase {
    attributeName?: string;
    deliveryMedium?: DeliveryMediumTypeEnum;
    destination?: string;
}
