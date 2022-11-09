import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MfaOptionType } from "./mfaoptiontype";
import { AttributeType } from "./attributetype";


// GetUserResponse
/** 
 * Represents the response from the server from the request to get information about the user.
**/
export class GetUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MFAOptions", elemType: shared.MfaOptionType })
  mfaOptions?: MfaOptionType[];

  @Metadata({ data: "json, name=PreferredMfaSetting" })
  preferredMfaSetting?: string;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeType })
  userAttributes: AttributeType[];

  @Metadata({ data: "json, name=UserMFASettingList" })
  userMfaSettingList?: string[];

  @Metadata({ data: "json, name=Username" })
  username: string;
}
