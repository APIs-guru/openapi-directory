import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AccessUrl" })
  accessUrl?: string;

  @Metadata({ data: "json, name=Alias" })
  alias?: string;

  @Metadata({ data: "json, name=ConnectSettings" })
  connectSettings?: DirectoryConnectSettingsDescription;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DesiredNumberOfDomainControllers" })
  desiredNumberOfDomainControllers?: number;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs?: string[];

  @Metadata({ data: "json, name=Edition" })
  edition?: DirectoryEditionEnum;

  @Metadata({ data: "json, name=LaunchTime" })
  launchTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerDirectoryDescription" })
  ownerDirectoryDescription?: OwnerDirectoryDescription;

  @Metadata({ data: "json, name=RadiusSettings" })
  radiusSettings?: RadiusSettings;

  @Metadata({ data: "json, name=RadiusStatus" })
  radiusStatus?: RadiusStatusEnum;

  @Metadata({ data: "json, name=RegionsInfo" })
  regionsInfo?: RegionsInfo;

  @Metadata({ data: "json, name=ShareMethod" })
  shareMethod?: ShareMethodEnum;

  @Metadata({ data: "json, name=ShareNotes" })
  shareNotes?: string;

  @Metadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @Metadata({ data: "json, name=ShortName" })
  shortName?: string;

  @Metadata({ data: "json, name=Size" })
  size?: DirectorySizeEnum;

  @Metadata({ data: "json, name=SsoEnabled" })
  ssoEnabled?: boolean;

  @Metadata({ data: "json, name=Stage" })
  stage?: DirectoryStageEnum;

  @Metadata({ data: "json, name=StageLastUpdatedDateTime" })
  stageLastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=StageReason" })
  stageReason?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DirectoryTypeEnum;

  @Metadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettingsDescription;
}
