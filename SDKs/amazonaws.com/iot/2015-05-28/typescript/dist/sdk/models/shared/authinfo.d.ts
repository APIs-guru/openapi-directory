import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
/**
 * A collection of authorization information.
**/
export declare class AuthInfo extends SpeakeasyBase {
    actionType?: ActionTypeEnum;
    resources: string[];
}
