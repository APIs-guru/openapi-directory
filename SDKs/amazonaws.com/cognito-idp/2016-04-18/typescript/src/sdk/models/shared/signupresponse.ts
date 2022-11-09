import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeDeliveryDetailsType } from "./codedeliverydetailstype";


// SignUpResponse
/** 
 * The response from the server for a registration request.
**/
export class SignUpResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeDeliveryDetails" })
  codeDeliveryDetails?: CodeDeliveryDetailsType;

  @Metadata({ data: "json, name=UserConfirmed" })
  userConfirmed: boolean;

  @Metadata({ data: "json, name=UserSub" })
  userSub: string;
}
