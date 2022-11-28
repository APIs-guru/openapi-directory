import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";
import { AttributeType } from "./attributetype";
import { UserStatusTypeEnum } from "./userstatustypeenum";



// AdminGetUserResponse
/** 
 * Represents the response from the server from the request to get the specified user as an administrator.
**/
export class AdminGetUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MFAOptions", elemType: MfaOptionType })
  mfaOptions?: MfaOptionType[];

  @SpeakeasyMetadata({ data: "json, name=PreferredMfaSetting" })
  preferredMfaSetting?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeType })
  userAttributes?: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=UserCreateDate" })
  userCreateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserLastModifiedDate" })
  userLastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserMFASettingList" })
  userMfaSettingList?: string[];

  @SpeakeasyMetadata({ data: "json, name=UserStatus" })
  userStatus?: UserStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
