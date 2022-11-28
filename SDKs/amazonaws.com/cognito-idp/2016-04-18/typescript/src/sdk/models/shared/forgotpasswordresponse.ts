import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";



// ForgotPasswordResponse
/** 
 * Respresents the response from the server regarding the request to reset a password.
**/
export class ForgotPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;
}
