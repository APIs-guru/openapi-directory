import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryVpcSettings } from "./directoryvpcsettings";


export class AddRegionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RegionName" })
  regionName: string;

  @Metadata({ data: "json, name=VPCSettings" })
  vpcSettings: DirectoryVpcSettings;
}
