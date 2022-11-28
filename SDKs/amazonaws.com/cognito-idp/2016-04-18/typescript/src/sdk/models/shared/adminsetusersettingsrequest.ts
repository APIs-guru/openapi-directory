import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";



// AdminSetUserSettingsRequest
/** 
 * You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
**/
export class AdminSetUserSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAOptions", elemType: MfaOptionType })
  mfaOptions: MfaOptionType[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
