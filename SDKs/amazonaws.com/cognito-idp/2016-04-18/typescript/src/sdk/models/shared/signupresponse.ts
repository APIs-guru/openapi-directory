import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";



// SignUpResponse
/** 
 * The response from the server for a registration request.
**/
export class SignUpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;

  @SpeakeasyMetadata({ data: "json, name=UserConfirmed" })
  userConfirmed: boolean;

  @SpeakeasyMetadata({ data: "json, name=UserSub" })
  userSub: string;
}
