import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";


// ResendConfirmationCodeResponse
/** 
 * The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
**/
export class ResendConfirmationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;
}
