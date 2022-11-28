import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";



// Setting
/** 
 * The current account setting for a resource.
**/
export class Setting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SettingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=principalArn" })
  principalArn?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
