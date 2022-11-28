import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * The verification code response returned by the server response to get the user attribute verification code.
**/
export declare class GetUserAttributeVerificationCodeResponse extends SpeakeasyBase {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
}
