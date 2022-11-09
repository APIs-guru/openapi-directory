import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientAuthenticationSettingInfo } from "./clientauthenticationsettinginfo";


export class DescribeClientAuthenticationSettingsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientAuthenticationSettingsInfo", elemType: shared.ClientAuthenticationSettingInfo })
  clientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
