import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MfaOptionType } from "./mfaoptiontype";
import { AttributeType } from "./attributetype";
import { UserStatusTypeEnum } from "./userstatustypeenum";


// AdminGetUserResponse
/** 
 * Represents the response from the server from the request to get the specified user as an administrator.
**/
export class AdminGetUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=MFAOptions", elemType: shared.MfaOptionType })
  mfaOptions?: MfaOptionType[];

  @Metadata({ data: "json, name=PreferredMfaSetting" })
  preferredMfaSetting?: string;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeType })
  userAttributes?: AttributeType[];

  @Metadata({ data: "json, name=UserCreateDate" })
  userCreateDate?: Date;

  @Metadata({ data: "json, name=UserLastModifiedDate" })
  userLastModifiedDate?: Date;

  @Metadata({ data: "json, name=UserMFASettingList" })
  userMfaSettingList?: string[];

  @Metadata({ data: "json, name=UserStatus" })
  userStatus?: UserStatusTypeEnum;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
