import { SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";
import { AttributeType } from "./attributetype";
/**
 * Represents the response from the server from the request to get information about the user.
**/
export declare class GetUserResponse extends SpeakeasyBase {
    mfaOptions?: MfaOptionType[];
    preferredMfaSetting?: string;
    userAttributes: AttributeType[];
    userMfaSettingList?: string[];
    username: string;
}
