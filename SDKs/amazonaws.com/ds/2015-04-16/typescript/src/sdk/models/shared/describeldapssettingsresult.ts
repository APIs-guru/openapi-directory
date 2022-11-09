import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LdapsSettingInfo } from "./ldapssettinginfo";


export class DescribeLdapsSettingsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=LDAPSSettingsInfo", elemType: shared.LdapsSettingInfo })
  ldapsSettingsInfo?: LdapsSettingInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
