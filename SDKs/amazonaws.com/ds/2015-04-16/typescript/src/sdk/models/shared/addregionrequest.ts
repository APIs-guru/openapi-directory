import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryVpcSettings } from "./directoryvpcsettings";



export class AddRegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;

  @SpeakeasyMetadata({ data: "json, name=VPCSettings" })
  vpcSettings: DirectoryVpcSettings;
}
