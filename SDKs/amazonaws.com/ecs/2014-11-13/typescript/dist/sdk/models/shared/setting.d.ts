import { SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";
/**
 * The current account setting for a resource.
**/
export declare class Setting extends SpeakeasyBase {
    name?: SettingNameEnum;
    principalArn?: string;
    value?: string;
}
