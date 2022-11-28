import { SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";
/**
 * The response from the server for a registration request.
**/
export declare class SignUpResponse extends SpeakeasyBase {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
    userConfirmed: boolean;
    userSub: string;
}
