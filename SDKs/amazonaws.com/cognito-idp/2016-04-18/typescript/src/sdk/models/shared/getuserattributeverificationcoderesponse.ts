import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";



// GetUserAttributeVerificationCodeResponse
/** 
 * The verification code response returned by the server response to get the user attribute verification code.
**/
export class GetUserAttributeVerificationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;
}
