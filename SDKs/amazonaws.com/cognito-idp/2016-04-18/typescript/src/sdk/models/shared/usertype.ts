import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
import { MfaOptionType } from "./mfaoptiontype";
import { UserStatusTypeEnum } from "./userstatustypeenum";



// UserType
/** 
 * The user type.
**/
export class UserType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeType })
  attributes?: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MFAOptions", elemType: MfaOptionType })
  mfaOptions?: MfaOptionType[];

  @SpeakeasyMetadata({ data: "json, name=UserCreateDate" })
  userCreateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserLastModifiedDate" })
  userLastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserStatus" })
  userStatus?: UserStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
