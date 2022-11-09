import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionTypeEnum } from "./regiontypeenum";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
/**
 * The replicated Region information for a directory.
**/
export declare class RegionDescription extends SpeakeasyBase {
    desiredNumberOfDomainControllers?: number;
    directoryId?: string;
    lastUpdatedDateTime?: Date;
    launchTime?: Date;
    regionName?: string;
    regionType?: RegionTypeEnum;
    status?: DirectoryStageEnum;
    statusLastUpdatedDateTime?: Date;
    vpcSettings?: DirectoryVpcSettings;
}
