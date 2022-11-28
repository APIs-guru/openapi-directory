import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageTemplateType } from "./messagetemplatetype";



// AdminCreateUserConfigType
/** 
 * The configuration for creating a new user profile.
**/
export class AdminCreateUserConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowAdminCreateUserOnly" })
  allowAdminCreateUserOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InviteMessageTemplate" })
  inviteMessageTemplate?: MessageTemplateType;

  @SpeakeasyMetadata({ data: "json, name=UnusedAccountValidityDays" })
  unusedAccountValidityDays?: number;
}
