import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchPermissionConfiguration } from "./launchpermissionconfiguration";
/**
 *  Define and configure the output AMIs of the pipeline.
**/
export declare class AmiDistributionConfiguration extends SpeakeasyBase {
    amiTags?: Map<string, string>;
    description?: string;
    kmsKeyId?: string;
    launchPermission?: LaunchPermissionConfiguration;
    name?: string;
    targetAccountIds?: string[];
}
