import { SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";
import { AttributeType } from "./attributetype";
import { UserStatusTypeEnum } from "./userstatustypeenum";
/**
 * Represents the response from the server from the request to get the specified user as an administrator.
**/
export declare class AdminGetUserResponse extends SpeakeasyBase {
    enabled?: boolean;
    mfaOptions?: MfaOptionType[];
    preferredMfaSetting?: string;
    userAttributes?: AttributeType[];
    userCreateDate?: Date;
    userLastModifiedDate?: Date;
    userMfaSettingList?: string[];
    userStatus?: UserStatusTypeEnum;
    username: string;
}
