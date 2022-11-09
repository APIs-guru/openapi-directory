import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RadiusSettings } from "./radiussettings";
import { RadiusStatusEnum } from "./radiusstatusenum";
import { DirectoryVpcSettingsDescription } from "./directoryvpcsettingsdescription";


// OwnerDirectoryDescription
/** 
 * Describes the directory owner account details that have been shared to the directory consumer account.
**/
export class OwnerDirectoryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs?: string[];

  @Metadata({ data: "json, name=RadiusSettings" })
  radiusSettings?: RadiusSettings;

  @Metadata({ data: "json, name=RadiusStatus" })
  radiusStatus?: RadiusStatusEnum;

  @Metadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettingsDescription;
}
