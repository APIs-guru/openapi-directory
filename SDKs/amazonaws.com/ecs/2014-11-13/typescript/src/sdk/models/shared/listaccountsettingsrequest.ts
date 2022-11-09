import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingNameEnum } from "./settingnameenum";


export class ListAccountSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveSettings" })
  effectiveSettings?: boolean;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=name" })
  name?: SettingNameEnum;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=principalArn" })
  principalArn?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
