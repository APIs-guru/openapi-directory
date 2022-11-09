import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionTypeEnum } from "./regiontypeenum";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";


// RegionDescription
/** 
 * The replicated Region information for a directory.
**/
export class RegionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredNumberOfDomainControllers" })
  desiredNumberOfDomainControllers?: number;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=LaunchTime" })
  launchTime?: Date;

  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;

  @Metadata({ data: "json, name=RegionType" })
  regionType?: RegionTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status?: DirectoryStageEnum;

  @Metadata({ data: "json, name=StatusLastUpdatedDateTime" })
  statusLastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettings;
}
