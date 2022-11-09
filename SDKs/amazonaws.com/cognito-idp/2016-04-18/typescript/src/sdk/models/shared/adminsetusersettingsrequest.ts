import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MfaOptionType } from "./mfaoptiontype";


// AdminSetUserSettingsRequest
/** 
 * You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
**/
export class AdminSetUserSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MFAOptions", elemType: shared.MfaOptionType })
  mfaOptions: MfaOptionType[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
