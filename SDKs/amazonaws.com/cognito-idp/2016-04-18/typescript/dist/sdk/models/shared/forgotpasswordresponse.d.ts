import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * Respresents the response from the server regarding the request to reset a password.
**/
export declare class ForgotPasswordResponse extends SpeakeasyBase {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
}
