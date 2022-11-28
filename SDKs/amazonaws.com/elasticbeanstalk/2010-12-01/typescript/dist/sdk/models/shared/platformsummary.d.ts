import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformStatusEnum } from "./platformstatusenum";
/**
 * Summary information about a platform version.
**/
export declare class PlatformSummary extends SpeakeasyBase {
    operatingSystemName?: string;
    operatingSystemVersion?: string;
    platformArn?: string;
    platformBranchLifecycleState?: string;
    platformBranchName?: string;
    platformCategory?: string;
    platformLifecycleState?: string;
    platformOwner?: string;
    platformStatus?: PlatformStatusEnum;
    platformVersion?: string;
    supportedAddonList?: string[];
    supportedTierList?: string[];
}
