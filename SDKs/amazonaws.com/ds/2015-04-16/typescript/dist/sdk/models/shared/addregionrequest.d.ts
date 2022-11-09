import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
export declare class AddRegionRequest extends SpeakeasyBase {
    directoryId: string;
    regionName: string;
    vpcSettings: DirectoryVpcSettings;
}
