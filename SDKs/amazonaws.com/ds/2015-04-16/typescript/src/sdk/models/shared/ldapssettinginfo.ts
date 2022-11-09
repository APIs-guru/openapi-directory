import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LdapsStatusEnum } from "./ldapsstatusenum";


// LdapsSettingInfo
/** 
 * Contains general information about the LDAPS settings.
**/
export class LdapsSettingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=LDAPSStatus" })
  ldapsStatus?: LdapsStatusEnum;

  @Metadata({ data: "json, name=LDAPSStatusReason" })
  ldapsStatusReason?: string;

  @Metadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;
}
