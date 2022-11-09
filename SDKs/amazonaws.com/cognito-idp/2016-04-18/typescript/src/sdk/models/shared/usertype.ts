import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeType } from "./attributetype";
import { MfaOptionType } from "./mfaoptiontype";
import { UserStatusTypeEnum } from "./userstatustypeenum";


// UserType
/** 
 * The user type.
**/
export class UserType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeType })
  attributes?: AttributeType[];

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=MFAOptions", elemType: shared.MfaOptionType })
  mfaOptions?: MfaOptionType[];

  @Metadata({ data: "json, name=UserCreateDate" })
  userCreateDate?: Date;

  @Metadata({ data: "json, name=UserLastModifiedDate" })
  userLastModifiedDate?: Date;

  @Metadata({ data: "json, name=UserStatus" })
  userStatus?: UserStatusTypeEnum;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
