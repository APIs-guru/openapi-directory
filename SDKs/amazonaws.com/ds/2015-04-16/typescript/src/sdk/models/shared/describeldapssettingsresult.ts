import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LdapsSettingInfo } from "./ldapssettinginfo";



export class DescribeLdapsSettingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LDAPSSettingsInfo", elemType: LdapsSettingInfo })
  ldapsSettingsInfo?: LdapsSettingInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
