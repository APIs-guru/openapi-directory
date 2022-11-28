import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";
export declare class DescribeClientAuthenticationSettingsRequest extends SpeakeasyBase {
    directoryId: string;
    limit?: number;
    nextToken?: string;
    type?: ClientAuthenticationTypeEnum;
}
