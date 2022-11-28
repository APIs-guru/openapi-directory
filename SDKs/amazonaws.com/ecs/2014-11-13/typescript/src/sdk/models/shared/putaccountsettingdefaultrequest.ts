import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";



export class PutAccountSettingDefaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: SettingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
