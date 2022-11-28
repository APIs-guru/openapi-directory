import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationStatusEnum } from "./clientauthenticationstatusenum";
import { ClientAuthenticationTypeEnum } from "./clientauthenticationtypeenum";



// ClientAuthenticationSettingInfo
/** 
 * Contains information about a client authentication method for a directory.
**/
export class ClientAuthenticationSettingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ClientAuthenticationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ClientAuthenticationTypeEnum;
}
