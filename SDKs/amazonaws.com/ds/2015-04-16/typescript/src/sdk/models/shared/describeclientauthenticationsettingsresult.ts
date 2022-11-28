import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationSettingInfo } from "./clientauthenticationsettinginfo";



export class DescribeClientAuthenticationSettingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientAuthenticationSettingsInfo", elemType: ClientAuthenticationSettingInfo })
  clientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
