import { SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";
export declare class ListAccountSettingsRequest extends SpeakeasyBase {
    effectiveSettings?: boolean;
    maxResults?: number;
    name?: SettingNameEnum;
    nextToken?: string;
    principalArn?: string;
    value?: string;
}
