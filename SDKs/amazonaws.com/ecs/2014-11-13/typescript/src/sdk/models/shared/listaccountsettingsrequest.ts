import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingNameEnum } from "./settingnameenum";



export class ListAccountSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveSettings" })
  effectiveSettings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SettingNameEnum;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=principalArn" })
  principalArn?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
