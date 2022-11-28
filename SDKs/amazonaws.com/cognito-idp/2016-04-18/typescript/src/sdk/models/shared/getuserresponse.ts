import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";
import { AttributeType } from "./attributetype";



// GetUserResponse
/** 
 * Represents the response from the server from the request to get information about the user.
**/
export class GetUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAOptions", elemType: MfaOptionType })
  mfaOptions?: MfaOptionType[];

  @SpeakeasyMetadata({ data: "json, name=PreferredMfaSetting" })
  preferredMfaSetting?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeType })
  userAttributes: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=UserMFASettingList" })
  userMfaSettingList?: string[];

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
