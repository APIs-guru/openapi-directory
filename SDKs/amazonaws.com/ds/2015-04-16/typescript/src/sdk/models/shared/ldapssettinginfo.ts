import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LdapsStatusEnum } from "./ldapsstatusenum";



// LdapsSettingInfo
/** 
 * Contains general information about the LDAPS settings.
**/
export class LdapsSettingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LDAPSStatus" })
  ldapsStatus?: LdapsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LDAPSStatusReason" })
  ldapsStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;
}
