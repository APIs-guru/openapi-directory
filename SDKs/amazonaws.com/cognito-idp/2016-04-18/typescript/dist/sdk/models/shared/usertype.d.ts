import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
import { MfaOptionType } from "./mfaoptiontype";
import { UserStatusTypeEnum } from "./userstatustypeenum";
/**
 * The user type.
**/
export declare class UserType extends SpeakeasyBase {
    attributes?: AttributeType[];
    enabled?: boolean;
    mfaOptions?: MfaOptionType[];
    userCreateDate?: Date;
    userLastModifiedDate?: Date;
    userStatus?: UserStatusTypeEnum;
    username?: string;
}
