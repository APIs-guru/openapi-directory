import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTemplateType } from "./messagetemplatetype";
/**
 * The configuration for creating a new user profile.
**/
export declare class AdminCreateUserConfigType extends SpeakeasyBase {
    allowAdminCreateUserOnly?: boolean;
    inviteMessageTemplate?: MessageTemplateType;
    unusedAccountValidityDays?: number;
}
