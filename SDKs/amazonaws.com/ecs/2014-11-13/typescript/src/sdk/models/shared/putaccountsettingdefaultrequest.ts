import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingNameEnum } from "./settingnameenum";


export class PutAccountSettingDefaultRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: SettingNameEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
