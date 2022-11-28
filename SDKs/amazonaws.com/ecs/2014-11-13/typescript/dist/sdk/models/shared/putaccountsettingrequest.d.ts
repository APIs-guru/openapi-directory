import { SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";
export declare class PutAccountSettingRequest extends SpeakeasyBase {
    name: SettingNameEnum;
    principalArn?: string;
    value: string;
}
