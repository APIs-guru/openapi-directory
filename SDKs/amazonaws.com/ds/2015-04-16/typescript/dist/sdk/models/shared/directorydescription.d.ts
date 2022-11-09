import { SpeakeasyBase } from "../../../internal/utils/utils";
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
/**
 * Contains information about an Directory Service directory.
**/
export declare class DirectoryDescription extends SpeakeasyBase {
    accessUrl?: string;
    alias?: string;
    connectSettings?: DirectoryConnectSettingsDescription;
    description?: string;
    desiredNumberOfDomainControllers?: number;
    directoryId?: string;
    dnsIpAddrs?: string[];
    edition?: DirectoryEditionEnum;
    launchTime?: Date;
    name?: string;
    ownerDirectoryDescription?: OwnerDirectoryDescription;
    radiusSettings?: RadiusSettings;
    radiusStatus?: RadiusStatusEnum;
    regionsInfo?: RegionsInfo;
    shareMethod?: ShareMethodEnum;
    shareNotes?: string;
    shareStatus?: ShareStatusEnum;
    shortName?: string;
    size?: DirectorySizeEnum;
    ssoEnabled?: boolean;
    stage?: DirectoryStageEnum;
    stageLastUpdatedDateTime?: Date;
    stageReason?: string;
    type?: DirectoryTypeEnum;
    vpcSettings?: DirectoryVpcSettingsDescription;
}
