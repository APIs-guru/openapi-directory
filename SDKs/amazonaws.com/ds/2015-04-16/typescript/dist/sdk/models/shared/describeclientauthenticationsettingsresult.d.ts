import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationSettingInfo } from "./clientauthenticationsettinginfo";
export declare class DescribeClientAuthenticationSettingsResult extends SpeakeasyBase {
    clientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];
    nextToken?: string;
}
