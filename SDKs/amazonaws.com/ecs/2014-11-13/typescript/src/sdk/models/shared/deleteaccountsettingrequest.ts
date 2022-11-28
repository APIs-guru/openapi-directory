import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";



export class DeleteAccountSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: SettingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=principalArn" })
  principalArn?: string;
}
