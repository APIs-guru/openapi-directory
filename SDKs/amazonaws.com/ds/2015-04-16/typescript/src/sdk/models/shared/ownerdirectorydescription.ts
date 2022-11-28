import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RadiusSettings } from "./radiussettings";
import { RadiusStatusEnum } from "./radiusstatusenum";
import { DirectoryVpcSettingsDescription } from "./directoryvpcsettingsdescription";



// OwnerDirectoryDescription
/** 
 * Describes the directory owner account details that have been shared to the directory consumer account.
**/
export class OwnerDirectoryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=RadiusSettings" })
  radiusSettings?: RadiusSettings;

  @SpeakeasyMetadata({ data: "json, name=RadiusStatus" })
  radiusStatus?: RadiusStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettingsDescription;
}
