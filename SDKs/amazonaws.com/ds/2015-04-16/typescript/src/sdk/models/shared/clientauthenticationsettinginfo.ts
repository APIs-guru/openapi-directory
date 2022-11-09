import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientAuthenticationStatusEnum } from "./clientauthenticationstatusenum";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";


// ClientAuthenticationSettingInfo
/** 
 * Contains information about a client authentication method for a directory.
**/
export class ClientAuthenticationSettingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: ClientAuthenticationStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ClientAuthenticationTypeEnum;
}
