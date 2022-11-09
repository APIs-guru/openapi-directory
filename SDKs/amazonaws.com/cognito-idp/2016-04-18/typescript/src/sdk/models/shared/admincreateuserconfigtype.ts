import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageTemplateType } from "./messagetemplatetype";


// AdminCreateUserConfigType
/** 
 * The configuration for creating a new user profile.
**/
export class AdminCreateUserConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowAdminCreateUserOnly" })
  allowAdminCreateUserOnly?: boolean;

  @Metadata({ data: "json, name=InviteMessageTemplate" })
  inviteMessageTemplate?: MessageTemplateType;

  @Metadata({ data: "json, name=UnusedAccountValidityDays" })
  unusedAccountValidityDays?: number;
}
