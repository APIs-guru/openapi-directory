import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationDeploymentStatusEnum } from "./configurationdeploymentstatusenum";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
/**
 * Describes the settings for a configuration set.
**/
export declare class ConfigurationSettingsDescription extends SpeakeasyBase {
    applicationName?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    deploymentStatus?: ConfigurationDeploymentStatusEnum;
    description?: string;
    environmentName?: string;
    optionSettings?: ConfigurationOptionSetting[];
    platformArn?: string;
    solutionStackName?: string;
    templateName?: string;
}
