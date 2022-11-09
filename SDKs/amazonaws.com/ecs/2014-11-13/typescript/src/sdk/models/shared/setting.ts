import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingNameEnum } from "./settingnameenum";


// Setting
/** 
 * The current account setting for a resource.
**/
export class Setting extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SettingNameEnum;

  @Metadata({ data: "json, name=principalArn" })
  principalArn?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
