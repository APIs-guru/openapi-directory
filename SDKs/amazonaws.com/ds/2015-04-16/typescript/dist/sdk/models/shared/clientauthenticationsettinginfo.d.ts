import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientAuthenticationStatusEnum } from "./clientauthenticationstatusenum";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
/**
 * Contains information about a client authentication method for a directory.
**/
export declare class ClientAuthenticationSettingInfo extends SpeakeasyBase {
    lastUpdatedDateTime?: Date;
    status?: ClientAuthenticationStatusEnum;
    type?: ClientAuthenticationTypeEnum;
}
