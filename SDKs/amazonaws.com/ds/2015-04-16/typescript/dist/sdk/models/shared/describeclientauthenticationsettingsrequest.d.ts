import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
export declare class DescribeClientAuthenticationSettingsRequest extends SpeakeasyBase {
    directoryId: string;
    limit?: number;
    nextToken?: string;
    type?: ClientAuthenticationTypeEnum;
}
