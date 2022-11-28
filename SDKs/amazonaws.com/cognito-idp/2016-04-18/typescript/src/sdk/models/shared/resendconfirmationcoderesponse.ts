import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";



// ResendConfirmationCodeResponse
/** 
 * The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
**/
export class ResendConfirmationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;
}
