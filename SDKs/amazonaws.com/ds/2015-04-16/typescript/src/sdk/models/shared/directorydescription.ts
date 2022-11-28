import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConnectSettingsDescription } from "./directoryconnectsettingsdescription";
import { DirectoryEditionEnum } from "./directoryeditionenum";
import { OwnerDirectoryDescription } from "./ownerdirectorydescription";
import { RadiusSettings } from "./radiussettings";
import { RadiusStatusEnum } from "./radiusstatusenum";
import { RegionsInfo } from "./regionsinfo";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareStatusEnum } from "./sharestatusenum";
import { DirectorySizeEnum } from "./directorysizeenum";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryTypeEnum } from "./directorytypeenum";
import { DirectoryVpcSettingsDescription } from "./directoryvpcsettingsdescription";



// DirectoryDescription
/** 
 * Contains information about an Directory Service directory.
**/
export class DirectoryDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessUrl" })
  accessUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectSettings" })
  connectSettings?: DirectoryConnectSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DesiredNumberOfDomainControllers" })
  desiredNumberOfDomainControllers?: number;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=Edition" })
  edition?: DirectoryEditionEnum;

  @SpeakeasyMetadata({ data: "json, name=LaunchTime" })
  launchTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerDirectoryDescription" })
  ownerDirectoryDescription?: OwnerDirectoryDescription;

  @SpeakeasyMetadata({ data: "json, name=RadiusSettings" })
  radiusSettings?: RadiusSettings;

  @SpeakeasyMetadata({ data: "json, name=RadiusStatus" })
  radiusStatus?: RadiusStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=RegionsInfo" })
  regionsInfo?: RegionsInfo;

  @SpeakeasyMetadata({ data: "json, name=ShareMethod" })
  shareMethod?: ShareMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareNotes" })
  shareNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ShortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: DirectorySizeEnum;

  @SpeakeasyMetadata({ data: "json, name=SsoEnabled" })
  ssoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Stage" })
  stage?: DirectoryStageEnum;

  @SpeakeasyMetadata({ data: "json, name=StageLastUpdatedDateTime" })
  stageLastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StageReason" })
  stageReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DirectoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettingsDescription;
}
