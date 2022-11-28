import { SpeakeasyBase } from "../../../internal/utils";
import { RadiusSettings } from "./radiussettings";
import { RadiusStatusEnum } from "./radiusstatusenum";
import { DirectoryVpcSettingsDescription } from "./directoryvpcsettingsdescription";
/**
 * Describes the directory owner account details that have been shared to the directory consumer account.
**/
export declare class OwnerDirectoryDescription extends SpeakeasyBase {
    accountId?: string;
    directoryId?: string;
    dnsIpAddrs?: string[];
    radiusSettings?: RadiusSettings;
    radiusStatus?: RadiusStatusEnum;
    vpcSettings?: DirectoryVpcSettingsDescription;
}
