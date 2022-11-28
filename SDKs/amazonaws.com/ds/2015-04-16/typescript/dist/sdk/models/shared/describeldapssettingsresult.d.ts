import { SpeakeasyBase } from "../../../internal/utils";
import { LdapsSettingInfo } from "./ldapssettinginfo";
export declare class DescribeLdapsSettingsResult extends SpeakeasyBase {
    ldapsSettingsInfo?: LdapsSettingInfo[];
    nextToken?: string;
}
