import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionTypeEnum } from "./regiontypeenum";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";



// RegionDescription
/** 
 * The replicated Region information for a directory.
**/
export class RegionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredNumberOfDomainControllers" })
  desiredNumberOfDomainControllers?: number;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LaunchTime" })
  launchTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "json, name=RegionType" })
  regionType?: RegionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DirectoryStageEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusLastUpdatedDateTime" })
  statusLastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettings;
}
