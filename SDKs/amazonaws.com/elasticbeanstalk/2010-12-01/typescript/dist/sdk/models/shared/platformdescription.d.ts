import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAmi } from "./customami";
import { PlatformFramework } from "./platformframework";
import { PlatformStatusEnum } from "./platformstatusenum";
import { PlatformProgrammingLanguage } from "./platformprogramminglanguage";
/**
 * Detailed information about a platform version.
**/
export declare class PlatformDescription extends SpeakeasyBase {
    customAmiList?: CustomAmi[];
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    frameworks?: PlatformFramework[];
    maintainer?: string;
    operatingSystemName?: string;
    operatingSystemVersion?: string;
    platformArn?: string;
    platformBranchLifecycleState?: string;
    platformBranchName?: string;
    platformCategory?: string;
    platformLifecycleState?: string;
    platformName?: string;
    platformOwner?: string;
    platformStatus?: PlatformStatusEnum;
    platformVersion?: string;
    programmingLanguages?: PlatformProgrammingLanguage[];
    solutionStackName?: string;
    supportedAddonList?: string[];
    supportedTierList?: string[];
}
