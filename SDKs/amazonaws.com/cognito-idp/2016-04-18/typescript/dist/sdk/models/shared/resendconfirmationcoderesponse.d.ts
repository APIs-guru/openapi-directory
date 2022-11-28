import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
**/
export declare class ResendConfirmationCodeResponse extends SpeakeasyBase {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
}
