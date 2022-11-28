import { SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
/**
 * Information about an application.
**/
export declare class ApplicationInfo extends SpeakeasyBase {
    applicationId?: string;
    applicationName?: string;
    computePlatform?: ComputePlatformEnum;
    createTime?: Date;
    gitHubAccountName?: string;
    linkedToGitHub?: boolean;
}
