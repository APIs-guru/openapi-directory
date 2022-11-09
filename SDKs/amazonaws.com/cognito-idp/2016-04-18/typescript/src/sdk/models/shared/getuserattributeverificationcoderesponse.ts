import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";


// GetUserAttributeVerificationCodeResponse
/** 
 * The verification code response returned by the server response to get the user attribute verification code.
**/
export class GetUserAttributeVerificationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;
}
